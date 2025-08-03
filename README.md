# 📇 Contact API — TypeScript Edition

A lightweight, in-memory **RESTful API** for managing contacts — fully typed with **TypeScript**, built using **Express 5**, and ready to plug into a fullstack app or use for practice with backend development.

---

## 🚀 Features

- 🆕 Create a new contact
- 📋 Get all contacts
- ✏️ Update an existing contact
- 🗑️ Delete a contact
---

## 🧰 Tech Stack

- **Node.js**
- **Express v5**
- **TypeScript**
- **ts-node-dev** for development

---

## 🧱 Project Structure
├── src/
│ ├── controllers/ # Logic for handling requests
│ ├── routes/ # API routes
│ ├── models/ # TypeScript interfaces/types
│ └── app.ts # Main Express setup
├── dist/ # Compiled JS output
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md


---

## 🔧 Installation & Usage

### 1. Clone the repo
git clone https://github.com/Ezekiel-web-dev-17/contact-api-typescript.git
cd contact-api-typescript

2. Install dependencies
npm install 

3. Start development server
npm run dev

4. Build project
npm run build

5. Start compiled server
npm start

📮 API Endpoints
Base URL: http://localhost:3000/api/contacts

Method	Endpoint	Description
GET	/	Get all contacts
GET	/:id	Get contact by ID
POST	/	Create a new contact
PUT	/:id	Update a contact
DELETE	/:id	Delete a contact

###Sample Contact Payload
{
  "name": "John Doe",
  "email": "johndoe@yahoo.com",
  "phone": 1234567890
}

###💡 Concepts Practiced
TypeScript interfaces
RESTful API architecture
In-memory data manipulation
Express 5 routing and middleware
Error handling with custom HttpError class
Strong typing for Request, Response, and NextFunction

🧪 Testing the API
Use Postman, Insomnia, or cURL to interact with the endpoints.

🙋‍♂️ AUTHOR
Made with 💻 & ☕ by Ezekiel — a dev with vision, discipline, and grit.

📜 License
This project is licensed under the MIT License.
