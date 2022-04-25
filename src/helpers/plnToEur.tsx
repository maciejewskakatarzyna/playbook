export const PLNtoEUR = (pln: number, eur: number) => {
  const recalculatedAmount = (pln / eur).toFixed(2);
  return recalculatedAmount;
};
