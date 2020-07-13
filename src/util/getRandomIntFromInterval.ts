export const getRandomIntFromInterval = (maxSize: number, minSize: number) =>
  Math.floor(Math.random() * (maxSize - minSize) + minSize);
