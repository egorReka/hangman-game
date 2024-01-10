import { checkStatusGame } from './check-status.js';
import { renderPictureElement } from './picture.js';

const createKeyboard = (letters) => {
  const fragment = document.createDocumentFragment();
  const keyboardContainer = document.createElement('div');

  keyboardContainer.id = 'keybord';
  keyboardContainer.classList.add('keyboard');

  letters.forEach((leter) => {
    const keyboardButton = document.createElement('button');

    keyboardButton.id = leter;
    keyboardButton.textContent = leter;
    keyboardButton.classList.add('button-primary', 'keyboard-button');
    keyboardContainer.append(keyboardButton);
  });

  fragment.append(keyboardContainer);

  return fragment;
};

const keybordButtonHandler = (triesLeft, winCount) => {
  const keybord = document.querySelector('#keybord');
  const renderPicture = renderPictureElement();

  keybord.addEventListener('click', (evt) => {
    const targetKey = evt.target.closest('.keyboard-button');
    const word = sessionStorage.getItem('word');

    evt.target.disabled = true;

    if (targetKey) {
      const targetLetter = targetKey.id.toLowerCase();
      const wordArray = Array.from(word);

      if (!word.includes(targetLetter)) {
        const triesCounter = document.querySelector('.tries-left');
        triesCounter.textContent = --triesLeft;
        renderPicture();
      } else {
        wordArray.forEach((currentLetter, i) => {
          if (currentLetter === targetLetter) {
            document.querySelector(`#letter_${i}`).textContent =
              targetLetter.toUpperCase();
            winCount++;
          }
        });
      }

      checkStatusGame(triesLeft, winCount);
    }
  });
};

export { createKeyboard, keybordButtonHandler };
