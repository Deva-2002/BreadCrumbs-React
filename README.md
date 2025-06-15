# 🛒 React Product Navigation App

This project is a simple **React.js** application that displays a list of users and their products using **React Router DOM** for client-side routing and dynamic navigation. It also features dynamic **breadcrumbs** that reflect the current route structure.

---

## 🚀 Features

- 👤 List of users and their associated products
- 🔀 Route-based product detail pages (`/product/:id`)
- 🧭 Breadcrumb navigation using URL structure
- 🧠 State management with `useState`
- 🧭 Navigation with `useNavigate`, `useParams`, `useLocation`
- 🎨 Styled using **Tailwind CSS**
- 🛠 Component-based architecture for clarity and reuse

---

## 📂 Pages & Components

- **Home Page**: Simple welcome message
- **Product Page**: Lists users (click to see their products)
- **Individual Product Page**: Displays products for selected user
- **Breadcrumbs Component**: Dynamically shows current path

---

## 📦 Tech Stack

- React
- React Router DOM
- Tailwind CSS
- Vite (build tool)

---

## 🗂 Folder Structure



---

## 💡 How It Works

- Routes are set up using `<Routes>` and `<Route>` components.
- The `App` component holds the main product data in local state.
- Clicking a user name navigates to `/product/:id`, rendering their products.
- The breadcrumb component parses the URL path to generate navigable links.

---

## 🧪 Example Routes

- `/home` → Home page
- `/product` → List of users
- `/product/1` → Products for user with ID 1

---

## ✅ To-Do (Optional Enhancements)

- [ ] Add 404 page
- [ ] Fetch product data from an API
- [ ] Improve breadcrumb display (e.g., convert `3` to "Charlie")

---

## 🧑‍💻 Author

**Deva Krishna S J**  
GitHub: [@Deva-2002](https://github.com/Deva-2002)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
