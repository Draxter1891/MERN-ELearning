# E-Learning Platform (MERN Stack)

## Introduction

This project is a fully functional **E-Learning Platform** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. The platform allows users to register, log in, browse courses, enroll, and watch lectures.
Admins can manage courses, users and payments.

## Folder Structure

```
/project-root
│── frontend/   # Contains the frontend code (React + Vite)
│── backend/    # Contains the backend code (Node.js + Express + MongoDB)
│── README.md   # Project documentation
```

## Tech Stack

### Frontend

- HTML, CSS, JavaScript
- React (with Vite for fast builds)
- React Router DOM
- Axios
- React Icons
- React Hot Toast

### Backend

- Node.js
- Express.js
- MongoDB (Database)
- JWT (JSON Web Tokens)
- Bcrypt (Password Hashing)
- Multer (File Uploads)
- Nodemailer (Email Notifications)
- Razorpay (Payment Gateway)

## Installation

To set up the project, follow these steps:

### 1. Clone the Repository

```sh
git clone https://github.com/Draxter1891/MERN-ELearning.git
cd MERN-ELearning
```

### 2. Setup Frontend

Navigate to the `frontend` folder, install dependencies, and start the development server:

```sh
cd frontend
npm install
npm run dev
```

### 3. Setup Backend

Navigate to the `backend` folder, install dependencies, and start the server:

```sh
cd backend
npm install
npm run dev
```

### 4. Create a .env file in server / and add :

```env
PORT=5000
DB=your_mongo_db_uri
JWT_SECRET=your_secret
RAZORPAY_KEY=your_key
RAZORPAY_SECRET=your_secret
EMAIL_SERVICE=gmail
ACTIVATION_KEY=your_key
PASSWORD=your_password
```

## Features

- **User authentication**(JWT-based login and registration)
- **Course Management**(Add, Edit, Delete Courses)
- **Video lectures**(Multer for file uploads)
- **Payment Integration**(Razorpay for payments)
- **User Dashboard**(Track enrolled courses)
- **Admin Panel**(Manage courses, users and payments)
- API endpoints with Express
- MongoDB database integration
- Responsive UI
- **(Note)**- To get the access of admin dashboard , need to change the role of user through database because by default you can register as user only.

## Backend Deployment

- Deploy using **Render, Railway or Vercel**.
- Push your backend to gitHub and Connect with the Deployment platform.

## Frontend Deployment

- Deploy using **Vercel or Netlify**.
- Connect your repository and set up environment variables.

## Database Deployment

- Use **MongoDB Atlas** for cloud database hosting.

## Contributing

Contributions are welcomed! If you'd like to contribute, fork the repository, make your changes, and submit a pull request.

## Note

- Loading may take some time due to using free sevice on Render Platform to deploy the web application.
