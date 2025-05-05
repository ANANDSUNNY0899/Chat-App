# ChatApp 💬

A real-time chat application built using the **MERN stack** (MongoDB, Express.js, React, Node.js). This application allows users to sign up, log in, and engage in real-time one-on-one messaging.

## 🚀 Features

- 🔐 User Authentication (JWT-based)
- 💬 Real-time messaging using Socket.IO
- 👥 One-to-one chat
- 🧾 Chat history saved in MongoDB
- 📱 Responsive UI using React
- 🌐 RESTful API with Express.js
- 🔄 Live updates without refreshing the page

## 🛠️ Tech Stack

### Frontend
- React.js
- Axios
- Socket.IO Client
- Tailwind CSS / Bootstrap (choose one based on your project)

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- Socket.IO
- JSON Web Tokens (JWT)
- bcrypt for password hashing

## 📁 Project Structure
chatapp/
│
├── client/ # React Frontend
│ ├── public/
│ └── src/
│ ├── components/
│ ├── pages/
│ ├── App.js
│ └── index.js
│
├── server/ # Node.js Backend
│ ├── config/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── server.js
│ └── .env
│
└── README.md


## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/chatapp.git
cd chatapp


2. Setup Backend
bash
Copy
Edit
cd server
npm install
Create a .env file inside /server and add:

ini
Copy
Edit
PORT=5000
MONGO_URI=your_mongo_db_uri
JWT_SECRET=your_jwt_secret
Start the backend server:

bash
Copy
Edit
npm run dev
3. Setup Frontend
bash
Copy
Edit
cd ../client
npm install
npm start
The frontend will run on http://localhost:3000
