import { stopGame } from './stop-game.js';

const checkStatusGame = (triesLeft, winCount) => {
  const word = sessionStorage.getItem('word');

  if (triesLeft <= 0) {
    return stopGame('lose', word);
  }

  if (winCount === word.length) {
    return stopGame('win', word);
  }
};

export { checkStatusGame };
