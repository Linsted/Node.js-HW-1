const fs = require("fs").promises;
const path = require('path');



const contactsPath = path.join(__dirname, "/db/contacts.json");



const listContacts = async () => {
    const contacts = await fs.readFile(contactsPath, "utf-8");
    return JSON.parse(contacts); 
};

const getContactById = async (contactId) => {
    
    const contacts = await listContacts();
    const contactByid =  contacts.find(contact => contact.id === contactId);
    return contactByid || null;

};

const removeContact = async (contactId) => {
    const contacts = await listContacts();
    const index = contacts.findIndex(contact => contact.id === contactId);
    if (index === -1) { return null }; 
    const [deletedContact] = contacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return deletedContact;
    
};

const addContact = (name, email, phone) => {
    // ...твій код

    
};


// getContactById("Z5sbDlS7pCzNsnAHLtDJd")
removeContact("rsKkOQUi80sgVPCcLZZW");