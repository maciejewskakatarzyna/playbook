export const sumAmount = (amount: number[]) => {
  const sum = amount.reduce(function (a, b) {
    return a + b;
  });
  return sum;
};
