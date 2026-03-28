# 🚀 Shop-Likes – Animated E-commerce Frontend

## 🌐 Live Demo  
👉 [Visit Website](https://poetic-elf-5ce502.netlify.app/)

---

## 📌 Project Overview

**Shop-Likes** is a modern and highly interactive e-commerce frontend application built using **React.js**.  
This project focuses on delivering a premium user experience using **advanced animations, smooth transitions, and client-side logic**.

Unlike basic frontend projects, this application integrates **GSAP animations, scroll-based effects, and a functional cart system using localStorage**.

---

## ✨ Features

### 🎨 Advanced Animations
- GSAP-powered smooth animations  
- Scroll-based animations (About page)  
- Page load transitions  
- Hover animations on product cards  

### 🛒 Cart System (Client-Side)
- Add to cart using **localStorage**  
- Persistent cart data after reload  
- Real-time UI updates  

### 🔐 Authentication (Client-Side + OAuth)
- Login / Logout functionality  
- OAuth-based login integration  
- User state stored in localStorage  

### 🚫 Access Control Logic
- Non-logged-in users can only add **up to 2 products**  
- After that, a login popup is triggered  

### 📦 Product Experience
- Animated product cards  
- Product detail popup modal:
  - Multiple images  
  - Product details  
  - Add to cart option  

### 📱 UI/UX Enhancements
- Fully animated Navbar with slider menu  
- Smooth navigation transitions  
- Clean and modern UI  
- Responsive design  

---

## 📄 Pages

- 🏠 Home Page (with entry animations)  
- 📦 Products Page (cards + popup modal)  
- ℹ️ About Page (scroll animations)  
- 📞 Contact Page  

---

## 🛠️ Tech Stack

- React.js  
- GSAP (GreenSock Animation Platform)  
- JavaScript (ES6+)  
- CSS3  
- LocalStorage API  

---

## ⚙️ How It Works

### 🧠 LocalStorage Usage
- Stores user login state  
- Stores cart items  
- Handles access restriction logic  

### 🔄 Cart Flow
1. User adds product to cart  
2. Data is stored in localStorage  
3. UI updates instantly  

### 🔐 Login Restriction
- If user is not logged in:
  - Can only add 2 products  
  - Login popup appears afterward  

---
## 🚀 Getting Started

```bash
# Clone the repository
git clone YOUR_REPO_LINK

# Install dependencies
npm install

# Run the project
npm start
