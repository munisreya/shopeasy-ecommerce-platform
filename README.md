# 🛒 ShopEasy — Full-Stack E-Commerce Platform

A production-ready full-stack e-commerce web application built with **Spring Boot**, **MySQL**, **JWT Authentication**, and a custom **HTML/CSS/JavaScript** frontend.

![Java](https://img.shields.io/badge/Java-17-orange)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-4.1.1-brightgreen)
![MySQL](https://img.shields.io/badge/MySQL-8.0-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## 📖 Overview

ShopEasy is a complete e-commerce platform that allows users to browse products across 10 categories, add items to a persistent shopping cart, place orders with shipping details, and track order status in real time. It features secure JWT-based authentication, role-based access control, and a fully responsive custom-built frontend.

---

## 🚀 Tech Stack

| Layer | Technologies |
|-------|--------------|
| **Backend** | Java 17, Spring Boot 4.1.1, Spring Security, Spring Data JPA |
| **Database** | MySQL 8 (10 normalized tables) |
| **Authentication** | JWT (JSON Web Tokens) + BCrypt password hashing |
| **Frontend** | HTML5, CSS3, Vanilla JavaScript (Fetch API) |
| **API Docs** | Swagger / OpenAPI 3 |
| **Build Tool** | Maven |
| **Testing** | Postman |

---

## ✨ Features

### 👤 User Features
- 📝 Register and login with secure JWT authentication
- 🛍️ Browse 120+ products across 10 categories
- 🔍 Real-time product search
- 🛒 Persistent shopping cart with quantity controls
- 💳 Multi-step checkout with shipping address
- 💰 Payment method selection (Card / UPI / Cash on Delivery)
- 📦 Order tracking with a visual status timeline
- 📜 Full order history

### 🔐 Admin Features
- Role-based access control (`ROLE_ADMIN`, `ROLE_CUSTOMER`)
- Create and manage products
- Create and manage categories
- View all customer orders

### ⚙️ Technical Features
- Stateless JWT authentication
- Passwords hashed with BCrypt (never exposed in API responses)
- Clean layered architecture (Controller → Service → Repository → Entity)
- DTO pattern for request/response separation
- Global exception handling
- Interactive Swagger API documentation
- Optimized MySQL schema with proper relations

---

## 🏗️ Architecture
