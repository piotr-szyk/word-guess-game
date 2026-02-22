// 🧠 Word Guess Game

const words = ["javascript", "array", "loop", "variable", "bootstrap", "recursion"];
let chosenWord = words[Math.floor(Math.random() * words.length)];
let guessedLetters = [];
let attempts = 10;

// Helper function to update the screen
function updateDisplay() {
  const maskedWord = chosenWord
    .split("")
    .map(char => (guessedLetters.includes(char) ? char : "_"))
    .join(" ");

  document.getElementById("maskedWord").textContent = maskedWord;
  document.getElementById("attempts").textContent = attempts;
  document.getElementById("guessedLetters").textContent = 
    guessedLetters.length > 0 ? guessedLetters.join(", ") : "None yet";
  
  return maskedWord; // Return this so startGame can use it for win-check
}

// 🎮 Core Game Logic
function startGame(letter) {
  if (guessedLetters.includes(letter)) return;

  guessedLetters.push(letter);

  if (!chosenWord.includes(letter)) {
    attempts--;
  }

  const currentMask = updateDisplay();

  // 🏁 Win/Loss Logic
  if (!currentMask.includes("_")) {
    // Timeout allows the browser to render the final letter before the alert pops up
    setTimeout(() => {
      alert("🎉 You Win!");
      location.reload();
    }, 100);
  } else if (attempts <= 0) {
    setTimeout(() => {
      alert("💀 Game Over! The word was: " + chosenWord);
      location.reload();
    }, 100);
  }
}

// ⌨️ Event Listener
window.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  if (key.match(/^[a-z]$/)) {
    startGame(key);
  }
});

// ✨ Initial call to set up the underscores correctly on page load
updateDisplay();