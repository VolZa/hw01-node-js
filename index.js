const contacts = require("./contacts.js");

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
       // викликаю функцію що зчитує (з файла .json) список контактів та вивожу їх в консоль
       const contactL = await contacts.listContacts();
       console.log(contactL);
       break;
 
     case 'get':
       // викликаю функцію що зчитує (з файла .json) контакт за id та вивожу в консоль цей контакт
       const contact = await contacts.getContactById(id);
       console.log(contact);
       break;
 
     case 'add':
      // викликаю функцію що формує об"єкт контакт  та дописує його до списку контактів, виводжу цей контакт в консоль
       const adedContact = await contacts.addContact(name, email, phone);
       console.log(adedContact);
       break;
 
     case 'remove':
        // викликаю функцію що шукає в списку об"єкт контакт (за id) та видаляє його, в разі успішного пошуку, зі списку контактів. В разі успішного пошуку виводжу в консоль цей контакт, в разі неуспішного пошуку виводжу  null 
       const removedContact = await contacts.removeContact(id);
       console.log(removedContact);
       break;
 
     default:
       console.warn('\x1B[31m Unknown action type! Ось так.');
   }
}

const { action, id, name, email, phone } = argv;
invokeAction({ action, id, name, email, phone });

