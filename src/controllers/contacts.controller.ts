import { Request, Response } from "express";
import { Contact } from "../models/contact";
let contacts: Contact[] = [];
const { Request, Response } = require("express");
export const getContacts = (req: Request, res: Response) => {
  try {
    res.status(200).json(contacts.length > 0 ? contacts : "No contacts found");
  } catch (error) {
    return res.status(500).send("Error fetching contacts");
  }
};

export const createContact = (req: Request, res: Response) => {
  try {
    let { name, email, phone } = req.body;
    let existingContact = contacts.find(
      (contact) =>
        name === contact.name &&
        email === contact.email &&
        phone === contact.phone
    );
    if (existingContact) {
      return res.status(400).send("Contact already exists");
    }
    let newContact: Contact = {
      id: `${Date.now()}`,
      name,
      email,
      phone,
    };
    contacts.push(newContact);
    res.status(201).send("Contact created successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error creating contact");
  }
};

export const updateContact = (req: Request, res: Response) => {
  try {
    let { name, email, phone } = req.body;
    const { id } = req.params;

    if (!id.slice(1)) {
      return res.status(400).send("Contact ID is required");
    }

    let newContact: Contact = {
      id: id.slice(1),
      name,
      email,
      phone,
    };

    let contactedPerson = contacts.find(
      (contact) => contact.id === id.slice(1)
    );
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
  } catch (error) {
    return res.status(500).send("Error updating contact");
  }
};

export const deleteContact = (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).send("Contact ID is required");
    }

    let contactedPerson = contacts.find(
      (contact) => contact.id === id.slice(1)
    );
    console.log(id.slice(1));
    if (!contactedPerson) {
      return res.status(404).send("Contact not found");
    }
    contacts = contacts.filter((contact) => contact.id !== id.slice(1));

    res.status(201).json({
      message: "Contact deleted successfully",
      contacts,
    });
  } catch (error) {
    return res.status(500).json({ message: "Error deleting contact" });
  }
};
