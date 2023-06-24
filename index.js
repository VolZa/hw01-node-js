const contacts = require("./contacts.js");
const argv = require('yargs').argv;

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
       const removedContact = removeContact(id);
       console.log(removedContact);
       break;
 
     default:
       console.warn('\x1B[31m Unknown action type! Ось так.');
   }
 }
 
 invokeAction({action: "get", id:"qdggE76Jtbfd9eWJHrssH"}).then(console.log).catch(console.error);

//  invokeAction({action: "list"}).then(console.log).catch(console.error);

 
//  invokeAction(argv);
 // contacts
//    .listContacts()
//    .then((contact) => console.log(contact))
//    .catch((er) => console.error(er));