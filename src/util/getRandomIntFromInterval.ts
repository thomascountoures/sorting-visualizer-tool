export const getRandomIntFromInterval = (maxSize: number, minSize: number) =>
  Math.random() * (maxSize - minSize) + minSize;
