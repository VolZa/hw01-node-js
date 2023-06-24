const fs = require("node:fs/promises");
const path = require("path");
const { v4: uuidv4 } = require('uuid');
//Зберігаю нормалізований шлях до файла contacts.json
const contactsPath = path.join(__dirname, "db/contacts.json");

async function listContacts() {
   // зчитую контакти з файла /db/contacts.json в кодуванні "utf8" 
  const contacts = await fs.readFile(contactsPath, "utf8");
  // return contacts;
  return JSON.parse(contacts);
};

async function writeContacts(contacts) {
  //writeContacts Викристовую лише в цьому файлі
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
}
 
 async function getContactById(contactId) {
   // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
   const contacts = await listContacts();
   const contact = contacts.find((contact) => contact.id === contactId);

  return contact || null;
 }
 
 async function removeContact(contactId) {
   // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
   const contacts = await listContacts();
   const index = contacts.findIndex(contact => contact.id === contactId);
   const newContacts = [
    ...contacts.slice(0, index),
    ...contacts.slice(index + 1),
   ];
   await writeContacts(newContacts);
   return newContacts || null;
 }
 
 async function addContact(name, email, phone) {
   // ...твій код. Повертає об'єкт доданого контакту. 
   const contacts = await listContacts();
   const contact = {id:uuidv4(), "name":name, "email":email, "phone":phone}
   contacts.push(contact); 
   return contact;
 }

// console.log(listContacts());

module.exports = { listContacts,
  getContactById,
  removeContact,
  addContact
 };

 // TODO: задокументувати кожну функцію
// fs.readFile(contactsPath, "utf8")
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));
  
  
  


// fs.writeFile(contactsPath, "utf8", [{}](err, data) => {
//   if (err) throw err;
  
//   console.log(data);
// });
// const contacts = fs.readFile(contactsPath, "utf8");
