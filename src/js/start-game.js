import { WORDS, KEYBOARD_LETTERS } from './consts.js';
import { getRandomIndex } from './utils.js';
import { createPicture } from './picture.js';
import { createPlaceholders } from './placeholders.js';
import { createLifeСounter } from './life-counter.js';
import { createKeyboard, keybordButtonHandler } from './keyboard.js';

const gameContainer = document.querySelector('#game');
const logoGame = document.querySelector('.logo');

const clearWindowGame = () => (gameContainer.innerHTML = '');

const startGame = () => {
  const wordToGuess = WORDS[getRandomIndex(WORDS.length)];
  let triesLeft = 10;
  let winCount = 0;

  sessionStorage.setItem('word', wordToGuess);
  clearWindowGame();

  logoGame.classList.add('logo-sm');
  gameContainer.append(
    createPicture(),
    createPlaceholders(wordToGuess),
    createLifeСounter(triesLeft),
    createKeyboard(KEYBOARD_LETTERS)
  );
  keybordButtonHandler(triesLeft, winCount);
};

const initGame = () => {
  const startGameButton = document.querySelector('#startGame');

  startGameButton.addEventListener('click', startGame);
};

export { initGame, startGame };
