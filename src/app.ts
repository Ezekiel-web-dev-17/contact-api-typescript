import express from "express";
import contactRouter from "./routes/contact.route";
const app = express();
app.use(express.json());
const PORT = 3000;
app.use("/api/contacts", contactRouter);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
