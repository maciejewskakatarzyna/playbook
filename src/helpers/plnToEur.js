export const PLNtoEUR = (pln, eur) => {
  const recalculatedAmount = (pln / eur).toFixed(2);
  return recalculatedAmount;
};
