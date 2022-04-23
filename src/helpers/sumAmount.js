export const sumAmount = amount => {
  const sum = amount.reduce(function (a, b) {
    return a + b;
  });
  return sum;
};
