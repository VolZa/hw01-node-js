const contacts = require("./contacts.js");
// const argv = require('yargs').argv;cl
const argv = require('yargs')
  .option('action', {
    alias: 'a',
    describe: 'Action to perform',
    demandOption: true
  })
  .option('id', {
    alias: 'i',
    describe: 'Contact ID',
    demandOption: false
  })
  .option('name', {
    alias: 'n',
    describe: 'Contact name',
    demandOption: false
  })
  .option('email', {
    alias: 'e',
    describe: 'Contact email',
    demandOption: false
  })
  .option('phone', {
    alias: 'p',
    describe: 'Contact phone',
    demandOption: false
  })
  .argv;


async function invokeAction({ action, id, name, email, phone }) {
   switch (action) {
     case 'list':
       // ...
       const contactL = await contacts.listContacts();
       console.log(contactL);
       break;
 
     case 'get':
       // ... id
       const contact = await contacts.getContactById(id);
       console.log(contact);
       break;
 
     case 'add':
       // ... name email phone
       const adedContact = await contacts.addContact(name, email, phone);
       console.log(adedContact);
       break;
 
     case 'remove':
       // ... id
       const removedContact = await contacts.removeContact(id);
       console.log(removedContact);
       break;
 
     default:
       console.warn('\x1B[31m Unknown action type! Ось так.');
   }
}

const { action, id, name, email, phone } = argv;
invokeAction({ action, id, name, email, phone });


// console.log(action, id, name, email, phone);
// console.log(process.argv);

// const actionIndex = process.argv.indexOf('--action');
// if (actionIndex !== -1) {
//   const action = process.argv[actionIndex + 1];
//   const id = process.argv[actionIndex + 2];
//   const name = process.argv[actionIndex + 3];
//   const email = process.argv[actionIndex + 4];
//   const phone = process.argv[actionIndex + 5];
//   invokeAction({ action, id, name, email, phone });

// }
// console.log(action, id, name, email, phone);
// console.log(process.argv);
// console.log(process.argv);

//  invokeAction({action: "remove", id:"968b1f78-025a-4830-88d6-b4877b8fd0a5"});

//  invokeAction({action: "add", name:"Anton", email:"ant@gmail.com", phone:"083 845 2398"});
 
//  invokeAction({action: "get", id:"qdggE76Jtbfd9eWJHrssH"}).then(console.log).catch(console.error);

//  invokeAction({action: "list"}).then(console.log).catch(console.error);

 
//  invokeAction(argv);
 // contacts
//    .listContacts()
//    .then((contact) => console.log(contact))
//    .catch((er) => console.error(er));
