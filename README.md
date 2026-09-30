<div align="center">

# 🐾 Pet Marketplace

**A full-stack pet marketplace built with a Laravel REST API and a React single-page application**

![Laravel](https://img.shields.io/badge/Laravel%2010-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)
![PHP](https://img.shields.io/badge/PHP%208.1-777BB4?style=for-the-badge&logo=php&logoColor=white)
![React](https://img.shields.io/badge/React%2018-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux%20Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Chakra UI](https://img.shields.io/badge/Chakra%20UI-319795?style=for-the-badge&logo=chakraui&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=for-the-badge&logo=leaflet&logoColor=white)

</div>

---

## Overview

**Pet Marketplace** is a two-sided platform where **sellers** list pets for sale or adoption and **buyers** browse, save favourites and place orders.

The project follows a **decoupled architecture**: a **Laravel 10 REST API** handles authentication, business logic and persistence, while a **React 18 SPA** delivers a responsive, component-driven user experience with centralised state management and interactive maps.

---

## Key Features

### 🔐 Authentication & Accounts
- Separate registration flows for **buyers** and **sellers**
- Secure login
- **Email OTP verification** on sign-up
- **Forgot password and reset** via email
- Transactional HTML email templates

### 🐶 Pet Listings (Seller)
- Full **CRUD**: create, view, update and delete pet listings
- **Category management** for organising listings
- **Visibility control** so sellers decide which pets appear publicly
- Seller dashboard showing all of a seller's listings

### 🛍️ Shopping Experience (Buyer)
- Browse all publicly visible pets
- Detailed pet profile pages
- **Wishlist**: add and remove favourite pets
- **Order placement** and checkout flow
- Sellers receive and review incoming orders

### 🗺️ Location & UX
- **Interactive maps** with Leaflet and route directions
- Toast notifications, modals and smooth animations
- Fully responsive UI built with Chakra UI and Tailwind CSS

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Back end** | Laravel 10, PHP 8.1, Eloquent ORM, Laravel Sanctum |
| **Front end** | React 18, React Router, Redux Toolkit, Axios |
| **UI** | Chakra UI, Tailwind CSS, Framer Motion, Lucide Icons |
| **Maps** | Leaflet, React-Leaflet, Leaflet Routing Machine |
| **Email** | Laravel Mail (OTP verification and password reset) |
| **Database** | MySQL (or any Laravel-supported relational database) |
| **Tooling** | Composer, npm, Vite, PHPUnit |

---

## Architecture

```
┌────────────────────────────┐        JSON / REST        ┌─────────────────────────────┐
│     React SPA (Client)     │ ────────────────────────▶ │     Laravel 10 REST API     │
│ Redux Toolkit · Router     │ ◀──────────────────────── │ Controllers · Eloquent ORM  │
│ Chakra UI · Tailwind       │          Axios            │ Validation · Mail (OTP)     │
│ Leaflet Maps               │                           └──────────────┬──────────────┘
└────────────────────────────┘                                          │
                                                          ┌─────────────▼─────────────┐
                                                          │    Relational database    │
                                                          │ Users · Pets · Categories │
                                                          │ Wishlists · Orders        │
                                                          └───────────────────────────┘
```

---

## API Reference

Base URL: `/api`

### Users & Authentication
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/create` | Register a buyer |
| `POST` | `/createSeller` | Register a seller |
| `POST` | `/login` | Authenticate a user |
| `POST` | `/otp` | Verify the email OTP |
| `POST` | `/forgetPassword` | Request a password reset |
| `POST` | `/resetPassword` | Reset the password |
| `GET` | `/users/{id}` | Get a user by ID |
| `GET` | `/seller` | List all sellers |

### Pets
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/pets` | List all pets |
| `GET` | `/pets/visible` | List publicly visible pets |
| `GET` | `/pets/get/{id}` | Get pet details |
| `GET` | `/pets/seller/{id}` | List a seller's pets |
| `POST` | `/pets/create` | Create a listing |
| `POST` | `/pets/update/{id}` | Update a listing |
| `DELETE` | `/pets/delete/{id}` | Delete a listing |

### Categories, Wishlist & Orders
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/category` | List categories |
| `POST` | `/category/create` | Create a category |
| `GET` | `/wishlist/{userId}` | Get a user's wishlist |
| `POST` | `/wishlist/add` | Add a pet to the wishlist |
| `DELETE` | `/wishlist/remove/{id}` | Remove from the wishlist |
| `POST` | `/order/create` | Place an order |
| `GET` | `/orders/{id}` | Get orders for a seller |

---

## Project Structure

```
.
├── backend/                      # Laravel 10 REST API
│   ├── app/
│   │   ├── Http/Controllers/     # User, Pet, Category, Wishlist, Order, Buy
│   │   └── Models/               # Eloquent models
│   ├── database/                 # Migrations and seeders
│   ├── resources/views/emails/   # Email templates (OTP, password reset)
│   └── routes/api.php            # REST API routes
├── frontend/                     # React 18 SPA
│   └── src/                      # Components, pages, Redux store
├── php-oop-core/                 # Object-oriented PHP product domain module
│   ├── ShopProduct.php           # Base product class
│   ├── BookProduct.php           # Inheritance: book product
│   ├── CdProduct.php             # Inheritance: CD product
│   └── JsonUtility.php           # JSON persistence utility
└── public/
```

The `php-oop-core` module demonstrates core **object-oriented PHP**: inheritance, encapsulation and a JSON-based persistence utility. It models the product domain that the platform evolved from.

---

## Getting Started

### Prerequisites
- PHP 8.1+ and Composer
- Node.js 18+ and npm
- MySQL (or another supported database)

### 1. Back end (Laravel API)

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
```

Configure the database and mail settings in `.env`, then run:

```bash
php artisan migrate
php artisan serve
```

The API runs at `http://localhost:8000/api`.

### 2. Front end (React)

```bash
cd frontend
npm install
npm start
```

The app runs at `http://localhost:3000`.


---

## Roadmap

- [ ] Token-based API protection with Laravel Sanctum on all private routes
- [ ] Online payment integration
- [ ] Real-time buyer and seller messaging
- [ ] Reviews and ratings
- [ ] Deployment with Docker and CI/CD

---

## Author

**Sabin Khanal**
Full-Stack Developer · Laravel · React · Android

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sabin-khanal-950163326/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Sabin78910)
