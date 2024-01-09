import { WORDS, KEYBOARD_LETTERS } from './consts.js';
import { getRandomIndex } from './utils.js';
import { createPlaceholders } from './create-placeholders.js';
import { createKeyboard } from './create-keyboard.js';
import { createLifeСounter } from './create-life-counter.js';
import { createPicture, renderPictureElement } from './create-picture.js';

const gameContainer = document.querySelector('#game');
const startGameButton = gameContainer.querySelector('#startGame');
const logoGame = document.querySelector('.logo');

const wordToGuess = WORDS[getRandomIndex(WORDS.length)];

const saveSessionStorage = () => sessionStorage.setItem('word', wordToGuess);
const clearWindowGame = () => (gameContainer.innerHTML = '');

const keybordButtonHandler = () => {
  const keybord = gameContainer.querySelector('#keybord');
  const renderPicture = renderPictureElement();

  keybord.addEventListener('click', (evt) => {
    const targetKey = evt.target.closest('.keyboard-button');

    if (targetKey) {
      console.log(targetKey.id);

      renderPicture();
    }
  });
};

const renderGame = () => {
  clearWindowGame();
  logoGame.classList.add('logo-sm');
  gameContainer.append(
    createPicture(),
    createPlaceholders(wordToGuess),
    createLifeСounter(),
    createKeyboard(KEYBOARD_LETTERS)
  );
  keybordButtonHandler();
};

const startGame = () => {
  saveSessionStorage();
  startGameButton.addEventListener('click', renderGame);
};

export { startGame };
