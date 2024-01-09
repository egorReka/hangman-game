import { WORDS, KEYBOARD_LETTERS } from "./mock.js";
import { getRandomIndex } from "./utils.js";
import { createPlaceholders } from "./create-placeholders.js";
import { createKeyboard } from "./create-keyboard.js";
import { createLifeСounter } from "./create-life-counter.js";

const gameContainer = document.querySelector('#game');
const startGameButton = gameContainer.querySelector('#startGame');

const wordToGuess = WORDS[getRandomIndex(WORDS.length)];

const saveSessionStorage = () => sessionStorage.setItem('word', wordToGuess);
const clearWindowGame = () => gameContainer.innerHTML = '';

const keybordButtonHandler = () => {
  const keybord = gameContainer.querySelector('#keybord');

  keybord.addEventListener('click', (evt) => {
    const targetKey = evt.target.closest('.keyboard-button');

    if (targetKey) {
      console.log(targetKey.id);
    }
  });
}

const renderGame = () => {
  clearWindowGame();

  gameContainer.append(
    createPlaceholders(wordToGuess),
    createLifeСounter(),
    createKeyboard(KEYBOARD_LETTERS)
  );

  keybordButtonHandler();
}

const startGame = () => {
  saveSessionStorage();
  startGameButton.addEventListener('click', renderGame);
};

export { startGame };