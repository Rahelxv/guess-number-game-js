# Guess Number Game JS 🎮

A dynamic and interactive number guessing game built with **Vanilla JavaScript**. This project allows users to define their own difficulty levels by setting custom ranges and a life system, featuring real-time feedback and visual rewards.

## ✨ Key Features
- **Customizable Difficulty:** Users can set their own "lives" (attempts), starting number, and ending number.
- **Smart Input Validation:** Built-in Regex filter to ensure only numeric values are accepted, preventing app crashes.
- **Real-time Feedback:** Integrated notification system that guides the player (e.g., "15 is down ⬇️" or "5 is up ⬆️").
- **Giphy API Integration:** Uses asynchronous Fetch API to display randomized GIFs for "Win" or "Game Over" states.
- **Dynamic UI/UX:** Smooth transition between the setup screen and the main gameplay without page reloads.

## 🚀 Technologies Used
* **JavaScript (ES6+)** – Core logic, DOM Manipulation, and Async/Await Fetch API.
* **HTML5** – Application structure and semantic elements.
* **CSS3** – Custom styling (includes support for Google Fonts like 'Creepster').
* **Giphy API** – Third-party service for dynamic visual feedback.

  
## 🛡️ API Fallback System
If the Giphy API reaches its request limit or fails to load, the script will automatically display a default placeholder image from the /img folder. This ensures the user always gets visual feedback (Win/Game Over) regardless of API status. If you want more api please go to their website (Giphy API).


## 🛠️ How to Run
1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/guess-number-game-js.git](https://github.com/your-username/guess-number-game-js.git)

## 📺 Game Preview
https://github.com/user-attachments/assets/51a3d955-46b2-465e-83ed-2397fbcc0944 
