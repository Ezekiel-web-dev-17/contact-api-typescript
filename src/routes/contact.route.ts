import { Router } from "express";
import {
  createContact,
  deleteContact,
  getContacts,
  updateContact,
} from "../controllers/contacts.controller";

const contactRouter = Router();

contactRouter.get("/", getContacts);
contactRouter.post("/create", createContact);
contactRouter.put("/update/:id", updateContact);
contactRouter.delete("/delete/:id", deleteContact);

export default contactRouter;
