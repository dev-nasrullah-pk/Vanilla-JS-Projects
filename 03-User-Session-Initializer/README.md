# 🚀 User Session Manager

A modern, responsive web application that manages user session state instantly upon page load using **IIFE (Immediately Invoked Function Expression)** and persistent memory via **LocalStorage**.

---

## 📌 Project Overview

This app checks whether a user has previously visited the site. 
- **First-time visitors:** Greeted as a "Guest" with an option to save their name.
- **Returning visitors:** Recognized instantly via `localStorage` with a personalized greeting ("Welcome Back, [Name]!"), while cleanly hiding input forms to maintain a minimalist UI.

---

## ✨ Key Features

- **⚡ Instant IIFE Execution:** Runs state logic before the rest of the app loads, keeping the global scope clean and avoiding memory leaks.
- **💾 LocalStorage Persistence:** Saves and retrieves user session data seamlessly across browser reloads.
- **⌨️ Keyboard UX:** Supports saving via both the **Save Button** click and pressing **Enter** key in the input field.
- **📱 Fully Responsive UI:** Styled with a modern Dark Slate palette (`#0b0f19` & `#1e293b`) using CSS Flexbox for smooth cross-device rendering.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3 (Flexbox & Modern Palette)
- **Logic:** Vanilla JavaScript (ES6+, IIFE, DOM Manipulation, Event Handling)
- **Storage:** Web Storage API (`localStorage`)