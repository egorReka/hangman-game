import { PICTURE_ELEMENTS } from './consts';
import { renderPictureElement } from './picture';
import { startGame } from './start-game';

const gameContainer = document.querySelector('#game');

const showResultHeader = (text, status) => {
  const fragment = document.createDocumentFragment();
  const resultHeaderContainer = document.createElement('h2');

  resultHeaderContainer.textContent = text;
  resultHeaderContainer.classList.add('result-header', status);

  fragment.append(resultHeaderContainer);

  gameContainer.append(fragment);
};

const showResultWord = (word) => {
  const fragment = document.createDocumentFragment();
  const resultWordContainer = document.createElement('p');
  const resultWordElement = document.createElement('span');

  resultWordElement.textContent = word;
  resultWordElement.classList.add('result-word');
  resultWordContainer.textContent = 'The word was: ';
  resultWordContainer.append(resultWordElement);

  fragment.append(resultWordContainer);

  gameContainer.append(fragment);
};

const showPlayAgainButton = () => {
  const fragment = document.createDocumentFragment();
  const playAgainButton = document.createElement('button');

  playAgainButton.id = 'play-again';
  playAgainButton.classList.add('button-primary', 'mt-10');
  playAgainButton.textContent = 'Play again';

  fragment.append(playAgainButton);

  gameContainer.append(fragment);
};

const playAgainButtonHandler = () => {
  const playAgainButton = document.querySelector('#play-again');

  playAgainButton.addEventListener('click', startGame);
};

const stopGame = (status, word) => {
  document.querySelector('.placeholders-wrapper').remove();
  document.querySelector('.lifeСounter').remove();
  document.querySelector('.keyboard').remove();
  document.querySelector('#quit').remove();

  if (status === 'lose') {
    showResultHeader('You lost :(', status);
  } else if (status === 'win') {
    const renderPicture = renderPictureElement();

    showResultHeader('You won!', status);
    document.querySelector('.picture-wrapper').classList.add(status);

    for (let i = 0; PICTURE_ELEMENTS.length > i; i++) {
      renderPicture();
    }
  }

  showResultWord(word);
  showPlayAgainButton();
  playAgainButtonHandler();
};

export { stopGame };
