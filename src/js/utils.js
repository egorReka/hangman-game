const getRandomIndex = (min, max) => {
  const isOneNumber = !max;

  if (isOneNumber) {
    max = min;
    min = 0;
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
};

export { getRandomIndex };
