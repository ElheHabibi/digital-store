# 🛍️ Digital Store

A demo built with **React, TypeScript, and Tailwind CSS**

Users can browse products, view product details, manage a persistent shopping cart, and access protected routes through a mock authentication system.

---

## ⚪ Features
- **Home page**
- **Store page** listing all products, with loading and error states
- **Product detail page** with add/remove-from-cart controls
- **Shopping cart** with quantity management, persisted in `localStorage`
- **Authentication** (mock login) with protected `/cart` route
- **Responsive UI**

## ⚪ Tech Stack
| Category      | Technology                          |
|------------|--------------------------------------|
| Framework  | React + TypeScript (Vite)            |
| Routing    | react-router-dom                     |
| Styling    | Tailwind CSS                         |
| HTTP client| Axios                                |
| State      | React Context API                    |
| Data       | [Fake Store API](https://fakestoreapi.com) |
| Persistence | LocalStorage |

---

## ⚪ Getting Started

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- npm

### 1. Clone the repository
```bash
git clone https://github.com/ElheHabibi/digital-store.git
```

### 2. Navigate to the project
```bash
cd digital-store
```

### 3. Install dependencies
```bash
npm install
```

### 4. Start the frontend
```bash
npm run dev
```
The app will be available at the URL shown by Vite (typically `http://localhost:5173`).

No backend setup needed — the app fetches live data from the public [Fake Store API](https://fakestoreapi.com).

---

## ⚪ API
The frontend communicates with the public [Fake Store API](https://fakestoreapi.com) using Axios.

The Axios client and API methods are located in:
```text
src/services/api.tsx
```

## ⚪ Routes
| Path            | Access   | Description                  |
|-----------------|----------|-------------------------------|
| `/`             | Public   | Home / landing page           |
| `/store`        | Public   | Product listing                |
| `/product/:id`  | Public   | Product detail                 |
| `/login`        | Public   | Login page                     |
| `/cart`         | Private  | Shopping cart (requires login)|

---

## ⚪ Production Build
Create a production build with:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```