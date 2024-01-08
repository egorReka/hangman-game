import { WORDS } from "./mock.js";
import { getRandomIndex } from "./utils.js";
import { renderPlaceholders } from "./render-placeholders.js";

const startGameButton = document.querySelector('#startGame');

const startGame = () => {
  const wordToGuess = WORDS[getRandomIndex(WORDS.length)];

  sessionStorage.setItem('word', wordToGuess);
  startGameButton.addEventListener('click', () => renderPlaceholders(wordToGuess));
};


export { startGame };