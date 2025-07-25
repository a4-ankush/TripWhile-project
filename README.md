# 🧳 Trip While –  Hotel Booking Web App

[![Live Demo](https://img.shields.io/badge/Live-Demo-red)](https://tripwhile-project.onrender.com/listings)

Trip While is a full-stack (and fully-featured) hotel and vacation rental booking platform. Users can browse curated listings, view locations on interactive maps, upload images, post reviews, and even become hosts!

> ✨ “Book with confidence, travel with joy, stay with us.”

---

## 🌐 Live Website

🔗 [https://tripwhile-project.onrender.com/listings](https://tripwhile-project.onrender.com/listings)

---

## 🔧 Features

- 🧳 Explore curated hotel/home listings
- 🔐 User authentication (register/login/logout)
- 🗺️ Interactive Map location per listing
- 📸 Upload images via Cloudinary
- 📝 Leave reviews with ratings
- 💾 Store sessions in MongoDB
- 🛡️ Secure input validation via Joi

---

## 📦 Tech Stack

**Frontend:**
- EJS templating
- HTML5, CSS3
- MapTiler SDK (maps)

**Backend:**
- Node.js (v22.14.0)
- Express.js
- MongoDB + Mongoose
- Passport.js Authentication
- Cloudinary (image upload)
- Joi (validation)

**Other:**
- Multer (file upload)
- Express-session
- Flash messages
- Dotenv
- Connect-mongo

---

## 📁 Folder Structure 
```
trip-while/
├── controllers/              # Route handlers for business logic
├── init/                     # Initialization scripts (e.g., DB connection)
├── models/                   # Mongoose models for DB schema
├── public/                   # Static assets (CSS, JS, images)
├── routes/                   # Route definitions
├── utils/                    # Helper functions or custom utilities
├── views/                    # EJS templates (frontend)
│
├── .gitignore                # Files and folders to ignore in Git
├── app.js                    # Main Express app file
├── cloudConfig.js            # Cloudinary configuration
├── middleware.js             # Custom Express middlewares
├── package.json              # Project metadata and dependencies
├── package-lock.json         # Exact versions of installed packages
├── schema.js                 # Joi validation schemas
```
---

## 🚀 Installation

### 1. Clone Repo
```bash
git clone https://github.com/your-username/trip-while.git
cd trip-while
```
### 3. Create .env File
```bash
npm install
```
### 2. Install Dependencies
```bash
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

MAPTILER_KEY=your_maptiler_key
DB_URL=your_mongodb_url
SESSION_SECRET=your_session_secret
```
### 2. Install Dependencies
```bash
node index.js
```
App will run on: http://localhost:3000

---

## 📃 License
This project is licensed under the ISC License.

---
Made with ❤️ by Ankush Kajla
---
