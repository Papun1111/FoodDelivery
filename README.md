# Food Delivery Website

A **full-stack** web application that lets users **select** and **order food** from different categories. The platform includes an **Admin Panel** for business owners to add, delete, and manage food items, as well as **track orders**. Users can **pay** online and **track** their orders’ status throughout the process.

---

## Table of Contents
1. [Project Overview](#project-overview)  
2. [Technology Used](#technology-used)  
3. [Installation Instructions](#installation-instructions)  
   - [Backend Setup](#backend-setup)  
   - [Frontend Setup](#frontend-setup)  
   - [Admin Panel Setup](#admin-panel-setup)  
4. [Deployment on Render](#deployment-on-render)  
5. [License](#license)  

---

## Project Overview

This repository contains **three** major parts:

- **Backend** (`/backend`): Node.js, Express, Mongoose, Stripe, etc.  
- **Frontend** (`/frontend`): React for the user-facing website.  
- **Admin** (`/admin`): React for the admin panel.

### Key Features
- **User Side**: Browse categories, add items to cart, securely pay, and track orders.  
- **Admin Side**: Add, edit, delete food items, manage orders, and monitor business performance.  

---

## Technology Used

Below are the main technologies used, displayed as colored pills:

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-AA2929?style=for-the-badge&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-6564DB?style=for-the-badge&logo=stripe&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)
![Multer](https://img.shields.io/badge/Multer-FF6F61?style=for-the-badge&logoColor=white)
![bcrypt](https://img.shields.io/badge/bcrypt-2F4858?style=for-the-badge&logoColor=white)
![JSON Web Tokens](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

Other libraries include **dotenv**, **cors**, **react-toastify**, **validator**, and more (see each `package.json` for details).

---

## Installation Instructions

### 1. Backend Setup

1. **Clone the repository** (or download the ZIP):
   ```bash
   git clone https://github.com/your-username/food-delivery-website.git
   ```
2. **Navigate to the backend folder**:
   ```bash
   cd food-delivery-website/backend
   ```
3. **Install backend dependencies**:
   ```bash
   npm install
   ```
   > This will install packages like **express**, **mongoose**, **stripe**, **multer**, etc., as specified in `package.json`.
4. **Create a `.env` file** (in the `backend` folder) and add your configuration:
   ```plaintext
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```
5. **Start the server**:
   ```bash
   npm run server
   ```
   The backend should now run on **http://localhost:5000** by default.

### 2. Frontend Setup

1. **Open another terminal** and navigate to the `frontend` folder:
   ```bash
   cd ../frontend
   ```
2. **Install frontend dependencies**:
   ```bash
   npm install
   ```
   > This will install **React**, **React Router**, **Axios**, etc.
3. **(Optional) Create a `.env` file** if needed, for example:
   ```plaintext
   VITE_API_URL=http://localhost:5000
   ```
4. **Run the development server**:
   ```bash
   npm run dev
   ```
   The frontend should now run on **http://localhost:5173** (or a similar port).

### 3. Admin Panel Setup

1. **Open a third terminal** and navigate to the `admin` folder:
   ```bash
   cd ../admin
   ```
2. **Install admin dependencies**:
   ```bash
   npm install
   ```
   > This will install **React**, **React Router**, **Axios**, **react-toastify**, etc.
3. **(Optional) Create a `.env` file** for your admin environment variables:
   ```plaintext
   VITE_ADMIN_API_URL=http://localhost:5000
   ```
4. **Run the development server**:
   ```bash
   npm run dev
   ```
   The admin panel should now run on **http://localhost:5173** or **http://localhost:5174**, depending on your system setup.

---

## Deployment on Render

Follow these general steps to deploy on [Render](https://render.com/). You will do this **three times** (once for each sub-project).

1. **Create a Render account** and link your GitHub repository.  
2. **Deploy the Backend**:  
   - Create a new **Web Service** in Render.  
   - Point it to the `backend` folder.  
   - Set environment variables (like `MONGODB_URI`, `JWT_SECRET`, etc.).  
   - Use `npm install` as the build command and `npm run server` as the start command.  
3. **Deploy the Frontend**:
   - Create a new **Static Site**.  
   - Point it to the `frontend` folder.  
   - Use `npm install && npm run build` as the build command.  
   - Publish directory: `dist`.  
   - Update your `VITE_API_URL` to point to the **Render backend URL**.  
4. **Deploy the Admin Panel**:  
   - Repeat the steps for **Static Site**.  
   - Point to the `admin` folder.  
   - Build command: `npm install && npm run build`.  
   - Publish directory: `dist`.  
   - Update your `VITE_ADMIN_API_URL` to the deployed backend URL.  

Once deployed, you’ll have three separate endpoints/URLs:

- **Backend** API endpoint (e.g., `https://backend.onrender.com`)  
- **Frontend** user site (e.g., `https://frontend.onrender.com`)  
- **Admin** panel site (e.g., `https://admin.onrender.com`)  

---

## License

This project is distributed under the **ISC License**..

---

**Happy Coding!** If you have any questions or ideas, feel free to open an issue or submit a pull request.
