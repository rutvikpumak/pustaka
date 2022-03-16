export const calcPercentage = (price, originalPrice) =>
  Math.floor(Math.abs((price / originalPrice) * 100 - 100));
