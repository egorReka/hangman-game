import { PICTURE_ELEMENTS } from './consts.js';

const createPicture = () => {
  const fragment = document.createDocumentFragment();
  const pictureContainer = document.createElement('div');

  pictureContainer.classList.add('picture-wrapper');
  fragment.append(pictureContainer);

  return fragment;
};

const renderPictureElement = () => {
  const pictureContainerElement = document.querySelector('.picture-wrapper');
  const fragment = document.createDocumentFragment();
  let currentElement = 0;

  return () => {
    const pictureElement = document.createElement('div');

    if (PICTURE_ELEMENTS.length <= currentElement) {
      return;
    }

    pictureElement.classList.add(PICTURE_ELEMENTS[currentElement]);
    currentElement++;
    fragment.append(pictureElement);
    pictureContainerElement.append(fragment);
  };
};

export { createPicture, renderPictureElement };
