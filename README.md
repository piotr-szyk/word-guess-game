# 🧠 Word Guess: Event-Driven Keyboard Challenge

A polished, interactive word-guessing game built with modern JavaScript (ES6+) and Bootstrap 5. This project demonstrates the transition from basic logic to event-driven programming and real-time DOM manipulation.

![Difficulty: Hard](https://img.shields.io/badge/Difficulty-Hard-red?style=for-the-badge)
![Topic: Event Driven Programming](https://img.shields.io/badge/Topic-Events_&_DOM-blue?style=for-the-badge)
![Standard: ES6+](https://img.shields.io/badge/Standard-ES6%2B-yellow?style=for-the-badge)

---

## 🎯 Project Overview
The objective was to create a "Hangman" style experience where the browser "listens" for user input. Unlike prompt-based applications, this project manages a continuous "Game State," updating the UI dynamically as the user interacts with their physical keyboard.

## 🚀 Live Demo
**[👉 Play the Word Guess Game Here](https://piotr-szyk.github.io/word-guess-game/)**

## 🛠️ Technical Implementation
This project showcases several advanced frontend development concepts:

* **Global Event Listeners:** Utilizing `window.addEventListener("keydown")` to capture user input globally.
* **State Management:** Tracking `guessedLetters`, `attempts`, and `maskedWord` through centralized logic.
* **Declarative Transformation:** Using Method Chaining (`.split().map().join()`) to calculate the masked word state efficiently.
* **DOM Manipulation:** Utilizing `document.getElementById` and `.textContent` to sync JavaScript variables with the UI.
* **Input Sanitization:** Implementing Regular Expressions (Regex) to ensure only alphabetic characters trigger logic.

## ✨ Key Features
- **Responsive UI:** Styled with Bootstrap 5 and custom CSS gradients for a "Glassmorphism" look.
- **Real-Time Feedback:** Immediate visual updates for correct/incorrect guesses.
- **Smart Validation:** Prevents duplicate guesses and ignores non-alphabetic keys.

## 📂 Structure
- `index.html`: Semantic HTML5 with Bootstrap integration.
- `script.js`: Core game logic and event handlers.
- `style.css`: Custom layout and typography.

---
© 2026 Piotr Szyk. All Rights Reserved.
