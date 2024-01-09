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

export { createKeyboard };
