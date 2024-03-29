const createLifeСounter = (tries) => {
  const fragment = document.createDocumentFragment();
  const lifeСounterContainer = document.createElement('p');
  const triesElement = document.createElement('span');

  lifeСounterContainer.textContent = 'TRIES LEFT: ';
  lifeСounterContainer.classList.add('lifeСounter');

  // triesElement.id = 'tries-left';
  triesElement.classList.add('tries-left');
  triesElement.textContent = tries;
  lifeСounterContainer.append(triesElement);
  fragment.append(lifeСounterContainer);

  return fragment;
};

export { createLifeСounter };
