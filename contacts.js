const fs = require("node:fs/promises");
const path = require("path");

//генератор id
const { v4: uuidv4 } = require('uuid');

//Зберігаю нормалізований шлях до файла contacts.json
const contactsPath = path.join(__dirname, "db/contacts.json");

async function listContacts() {
   // зчитую контакти з файла /db/contacts.json в кодуванні "utf8" 
  const contacts = await fs.readFile(contactsPath, "utf8");
  return JSON.parse(contacts);
};

//writeContacts Викристовую лише в цьому файлі
async function writeContacts(contacts) {
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
}
 //Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
 async function getContactById(contactId) {
   const contacts = await listContacts();
   const contact = contacts.find((contact) => contact.id === contactId);

  return contact || null;
 }
 
//Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
async function removeContact(contactId) {
  const contactsL = await listContacts();
  const index = contactsL.findIndex(contact => contact.id === contactId);
  const delContact = contactsL.filter(c => c.id === contactId);
  if (delContact.length <= 0) return null;
   
  const newContacts = [
    ...contactsL.slice(0, index),
    ...contactsL.slice(index + 1),
  ];
  await writeContacts(newContacts);
  return delContact  || null;
}

//Додає контакт та повертає об'єкт доданого контакту.
async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const contact = {id:uuidv4(), "name":name, "email":email, "phone":phone}
  contacts.push(contact);
  await writeContacts(contacts);
  return contact;
}

// Експорт функцій з модуля  contacts.js, щоб інші модулі або скрипти могли їх використовувати.
module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact
};

 
