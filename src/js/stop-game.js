import { PICTURE_ELEMENTS } from './consts';
import { renderPictureElement } from './picture';
import { startGame } from './start-game';

const gameContainer = document.querySelector('#game');

const showResultHeader = (text) => {
  const fragment = document.createDocumentFragment();
  const resultHeaderContainer = document.createElement('h2');

  resultHeaderContainer.textContent = text;
  resultHeaderContainer.classList.add('result-header');

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

const stopGame = (status, word) => {
  document.querySelector('.placeholders-wrapper').remove();
  document.querySelector('.lifeСounter').remove();
  document.querySelector('.keyboard').remove();

  if (status === 'lose') {
    showResultHeader('You lose :(');
  } else if (status === 'win') {
    showResultHeader('You win!');
    document.querySelector('.picture-wrapper').classList.add(status);
    const renderPicture = renderPictureElement();

    for (let i = 0; PICTURE_ELEMENTS.length > i; i++) {
      renderPicture();
    }
  }

  showResultWord(word);
  showPlayAgainButton();

  const playAgainButton = document.querySelector('#play-again');

  playAgainButton.addEventListener('click', startGame);
};

export { stopGame };
