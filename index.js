const { listContacts, getContactById, removeContact, addContact } = require("./contacts")
const { hideBin } = require('yargs/helpers');
const yargs = require('yargs/yargs')
const argv = yargs(hideBin(process.argv)).argv




const  invokeAction = async ({ action, id, name, email, phone })=>{
  
  try {
    switch (action) {
    case "list":
          const contacts = await listContacts();
          return console.log(contacts);

    case "get":
          const contactById = await getContactById(id);
      return console.log(contactById);

    case "add":
      const newContact = await addContact(name,email,phone)
      return console.log(newContact);

    case "remove":
      const deletedContact = await removeContact(id)
      return console.log(deletedContact);;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
  } catch (error) {
    console.log(error)
  }
    
}

invokeAction(argv);
