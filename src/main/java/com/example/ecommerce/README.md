# 🛒 ShopEasy — Full-Stack E-Commerce Platform

A production-ready e-commerce web application built with **Spring Boot**, **MySQL**, **JWT Authentication**, and a **custom HTML/CSS/JavaScript frontend**.

## 🚀 Tech Stack

- **Backend:** Java 17, Spring Boot 4.1.1, Spring Security, Spring Data JPA
- **Database:** MySQL 8 (10 tables, normalized schema)
- **Auth:** JWT (JSON Web Tokens) + BCrypt password hashing
- **Frontend:** HTML5, CSS3, Vanilla JavaScript (Fetch API)
- **API Docs:** Swagger / OpenAPI 3
- **Testing:** Postman

## ✨ Features

### User Features
- 📝 Register / Login with JWT authentication
- 🛍️ Browse 123+ products across 10 categories
- 🔍 Real-time product search
- 🛒 Persistent shopping cart with quantity controls
- 💳 Checkout with shipping address + payment method selection
- 📦 Order tracking with visual status timeline
- 👤 User profile with order history

### Admin Features
- 🔐 Role-based access control (ROLE_ADMIN, ROLE_CUSTOMER)
- 📦 Manage products & categories
- 👥 View all orders

### Technical Features
- 🔒 Stateless JWT authentication
- 🛡️ Passwords hashed with BCrypt (never exposed in API responses)
- 🏗️ Clean layered architecture (Controller → Service → Repository)
- 📊 Interactive Swagger API documentation
- ⚡ Optimized MySQL queries with proper relations

## 🏗️ Architecture
