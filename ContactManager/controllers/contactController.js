const Contact = require("../model/contactModel"); 
 
const getContact = async (req, res) => { 
 
    try { 
        const contact = await Contact.findById(req.params.id); 
        if(!contact){ 
            res.status(400).json({ message: "contact not found" }); 
  } 
        res.status(200).json(contact); 
        } 
    catch (error) { 
        console.log(error) 
            } 
} 
const createContact = async (req, res) => { 
    try { 
        const { name, email, phone } = req.body; 
        if (!name || !email || !phone) { 
            res.status(400).json({ message: "All fields are required" }); 
        } 
        const contact = await Contact.create({ 
            name, 
            email, 
            phone 
        }); 
        res.status(201).json({ message: "A new contact is created" }); 
 
       } 
    catch (error) { 
        console.log(error) 
 
    } 
} 
const updateContact = async (req, res) => { 
    try { 
        const contact = await Contact.findById(req.params.id); 
        if(!contact){ 
        res.status(400).json({ message: "contact not found" }); 
  } 
        // Use findByIdAndUpdate to update the document 
        const updatedContact = await Contact.findByIdAndUpdate( 
            req.params.id, // ID of the document to update 
            req.body,      // Data to update with (sent from the client) 
            { new: true }  // Option: returns the newly updated document 
        ); 
 
        // Return the updated contact object 
        res.status(200).json(updatedContact); 
 
    } 
    catch (error) { 
        console.log(error) 
        res.status(500).json({ message: "Server error during update" }); 
    } 
} 
const deleteContact = async (req, res) => { 
    try { 
        const contact = await Contact.findById(req.params.id); 
        if(!contact){ 
            res.status(404).json({ message: "Contact not found" });
                       return; 
        } 
 
        // Use findByIdAndDelete (or contact.deleteOne()) to remove the document 
        await Contact.findByIdAndDelete(req.params.id); 
 
        res.status(200).json(contact); // Respond with the deleted object or asuccess message 
 
    } 
    catch (error) { 
        console.log(error) 
        res.status(500).json({ message: "Server error during deletion" }); 
    } 
} 
module.exports = { 
 
    getContact, 
    createContact, 
    updateContact, 
    deleteContact 
}