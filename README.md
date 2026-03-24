# 📚 Book Finder React

A modern book search application built with React.  
Users can search for books using the **Open Library API** and view results on a separate page.

**[Live Demo](#)** _(Add your Vercel / Netlify link here after deployment)_

---

## 📸 Preview

![App Screenshot](./src/assets/screenshot.png)

---

## ✨ Features

- 🔍 Book search using the Open Library public API (by title, author, or keyword)
- 📖 Results page with book covers, authors, and additional details
- ❤️ Save books to favorites (persisted with localStorage)
- 📄 Pagination support for search results
- ⚡ Global state management using Context API (no prop drilling)
- 🔄 Loading states and spinner
- 🧭 Responsive design for different screen sizes

---

## 🛠 Tech Stack

- **React 18** + Vite
- **React Router DOM v6** (multi-page navigation)
- **Context API** (global state management)
- **CSS Modules** (scoped styling)
- **Open Library API**
- **JavaScript (ES6+)**

---

## 📁 Project Structure

```bash
src/
├── components/    # Reusable UI components (BookCard, Search, Pagination, Spinner)
├── contexts/      # Global state (BookContext, ModalContext)
├── pages/         # Pages (Home, Results, SavedBooks, About)
├── services/      # API layer (apiBooks.js, apiBookDetails.js)
├── assets/        # Images and static assets
└── App.jsx

```

🚀 How to Run Locally

# 1. Clone the repository

git clone https://github.com/laszlodus/book-finder-react.git

# 2. Navigate into the project

cd book-finder-react

# 3. Install dependencies

npm install

# 4. Start the development server

npm run dev
🎯 What I Learned
-Managing global state using Context API and custom hooks
-Structuring a React application with clear separation of concerns
-Creating a reusable service layer for API requests
-Handling asynchronous data with loading and error states
-Building responsive and maintainable UI with CSS Modules
-Implementing pagination and modal-based detail views

📬 Contact

I am currently open to Junior Front-End Developer opportunities.
Laszlo Dus
Frontend Developer
GitHub | LinkedIn https://www.linkedin.com/in/laszlo-dus-6b625035b/
