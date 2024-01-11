import { stopGame } from './stop-game';

const createQuitElement = () => {
  const fragment = document.createDocumentFragment();
  const quitButton = document.createElement('button');

  quitButton.id = 'quit';
  quitButton.textContent = 'quit';
  quitButton.classList.add('button-secondary');

  fragment.append(quitButton);

  return fragment;
};

const quitHandler = () => {
  const quitButton = document.querySelector('#quit');
  const pictureContainerElement = document.querySelector('.picture-wrapper');
  const logoGame = document.querySelector('.logo');
  const word = sessionStorage.getItem('word');

  quitButton.addEventListener('click', (evt) => {
    if (evt.target === quitButton) {
      const isSure = confirm(
        'Are you sure you want to leave the game and lose your progress?'
      );

      if (isSure) {
        stopGame();
        pictureContainerElement.remove();
        logoGame.classList.remove('logo-sm');
        document.querySelector('.result-word').textContent = word;
      }
    }
  });
};

export { createQuitElement, quitHandler };
