# 🛒 ShopEasy — Full-Stack E-Commerce Platform

A production-ready full-stack e-commerce web application built with **Spring Boot**, **MySQL**, **JWT Authentication**, and a custom **HTML/CSS/JavaScript** frontend.

![Java](https://img.shields.io/badge/Java-17-orange)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-4.1.1-brightgreen)
![MySQL](https://img.shields.io/badge/MySQL-8.0-blue)

## 📖 Overview

ShopEasy is a complete e-commerce platform where users can browse products across 10 categories, add items to a persistent cart, place orders with shipping details, and track order status. It features secure JWT authentication, role-based access control, and a fully responsive custom frontend.

## 🚀 Tech Stack

| Layer | Technologies |
|-------|--------------|
| Backend | Java 17, Spring Boot 4.1.1, Spring Security, Spring Data JPA |
| Database | MySQL 8 (10 normalized tables) |
| Auth | JWT + BCrypt |
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| API Docs | Swagger / OpenAPI 3 |
| Build | Maven |

## ✨ Features

- 📝 Register / Login with JWT authentication
- 🛍️ Browse 120+ products across 10 categories
- 🔍 Real-time product search
- 🛒 Persistent shopping cart with quantity controls
- 💳 Multi-step checkout with shipping address
- 💰 Payment method selection (Card / UPI / COD)
- 📦 Order tracking with visual status timeline
- 🔐 Role-based access control (ADMIN / CUSTOMER)
- 📊 Interactive Swagger API documentation

## 🏗️ Architecture

Frontend (HTML/CSS/JS)
        ↓  Fetch API + JWT
Spring Boot REST API
   Controller → Service → Repository
        ↓  JPA / Hibernate
MySQL Database (10 tables)

## 📁 Project Structure

src/main/java/com/example/ecommerce/
- config/       → SecurityConfig
- controller/   → Auth, Product, Category, Cart, Order
- dto/          → Request/Response objects
- entity/       → JPA entities
- repository/   → Spring Data JPA repos
- security/     → JWT filter, JwtService
- service/      → Business logic

## 🔗 API Endpoints

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | /api/auth/register | Public | Register user |
| POST | /api/auth/login | Public | Login & get JWT |
| GET | /api/products | Public | List all products |
| GET | /api/products/{id} | Public | Get product by ID |
| POST | /api/products | Admin | Create product |
| GET | /api/categories | Public | List categories |
| POST | /api/categories | Admin | Create category |
| GET | /api/cart | Auth | View cart |
| POST | /api/cart/add | Auth | Add to cart |
| DELETE | /api/cart/remove/{id} | Auth | Remove item |
| POST | /api/orders/place | Auth | Checkout |
| POST | /api/orders/{id}/pay | Auth | Mark as paid |
| GET | /api/orders | Auth | Order history |
| GET | /api/orders/admin/all | Admin | View all orders |

## ⚙️ Setup Instructions

### 1. Clone the repository

git clone https://github.com/munisreya/shopeasy-ecommerce-platform.git
cd shopeasy-ecommerce-platform

### 2. Create the MySQL database

CREATE DATABASE ecommerce_db;

### 3. Configure application.properties

spring.datasource.url=jdbc:mysql://localhost:3306/ecommerce_db
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD
jwt.secret=your-very-long-secret-key-min-32-chars
jwt.expiration=86400000

### 4. Run the application

./mvnw spring-boot:run

### 5. Open in browser

Website:        http://localhost:8080/index.html
Swagger Docs:   http://localhost:8080/swagger-ui.html

## 🔒 Security Highlights

- Stateless JWT authentication
- BCrypt password hashing
- Role-based access control via @PreAuthorize
- @JsonIgnore prevents password leaks in API responses

## 🧪 Testing

Thoroughly tested using Postman covering:

- User registration and login
- JWT token validation
- Role-based access control
- Cart operations (add, update, remove)
- Order placement and status updates

## 👨‍💻 Author

Munisreya B

GitHub: https://github.com/munisreya

## 📄 License

This project is licensed under the MIT License.

⭐ If you found this project helpful, please give it a star!