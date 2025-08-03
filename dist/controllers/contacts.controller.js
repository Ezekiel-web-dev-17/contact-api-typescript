"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteContact = exports.updateContact = exports.createContact = exports.getContacts = void 0;
let contacts = [];
const { Request, Response } = require("express");
const getContacts = (req, res) => {
    try {
        res.status(200).json(contacts.length > 0 ? contacts : "No contacts found");
    }
    catch (error) {
        return res.status(500).send("Error fetching contacts");
    }
};
exports.getContacts = getContacts;
const createContact = (req, res) => {
    try {
        let { name, email, phone } = req.body;
        let existingContact = contacts.find((contact) => name === contact.name &&
            email === contact.email &&
            phone === contact.phone);
        if (existingContact) {
            return res.status(400).send("Contact already exists");
        }
        let newContact = {
            id: `${Date.now()}`,
            name,
            email,
            phone,
        };
        contacts.push(newContact);
        res.status(201).send("Contact created successfully");
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Error creating contact");
    }
};
exports.createContact = createContact;
const updateContact = (req, res) => {
    try {
        let { name, email, phone } = req.body;
        const { id } = req.params;
        if (!id.slice(1)) {
            return res.status(400).send("Contact ID is required");
        }
        let newContact = {
            id: id.slice(1),
            name,
            email,
            phone,
        };
        let contactedPerson = contacts.find((contact) => contact.id === id.slice(1));
        if (!contactedPerson) {
            return res
                .status(404)
                .send("Contact not found and so cannot be updated.");
        }
        contacts = contacts.filter((contact) => contact.id !== id.slice(1));
        contacts.push(newContact);
        return res.status(201).json({
            message: "Contact updated successfully",
            newContact,
            contactedPerson,
        });
    }
    catch (error) {
        return res.status(500).send("Error updating contact");
    }
};
exports.updateContact = updateContact;
const deleteContact = (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).send("Contact ID is required");
        }
        let contactedPerson = contacts.find((contact) => contact.id === id.slice(1));
        console.log(id.slice(1));
        if (!contactedPerson) {
            return res.status(404).send("Contact not found");
        }
        contacts = contacts.filter((contact) => contact.id !== id.slice(1));
        res.status(201).json({
            message: "Contact deleted successfully",
            contacts,
        });
    }
    catch (error) {
        return res.status(500).json({ message: "Error deleting contact" });
    }
};
exports.deleteContact = deleteContact;
