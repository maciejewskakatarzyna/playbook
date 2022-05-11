export const sumAmount = (amount: number[]) => {
  return amount.reduce(function (a, b) {
    return a + b;
  });
};
