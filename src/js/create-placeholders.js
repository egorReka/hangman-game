const createPlaceholders = (word) => {
  const fragment = document.createDocumentFragment();
  const newListElement = document.createElement('ul');

  newListElement.id = 'placeholders';
  newListElement.classList.add('placeholders-wrapper');

  for (let i = 0; word.length > i; i++) {
    const newItemElement = document.createElement('li');

    newItemElement.textContent = '_';
    newItemElement.id = `letter_${i}`;
    newItemElement.classList.add('letter');
    newListElement.append(newItemElement);
  };

  fragment.append(newListElement);

  return fragment;
}

export { createPlaceholders };