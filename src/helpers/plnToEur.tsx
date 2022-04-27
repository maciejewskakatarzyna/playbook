export const PLNtoEUR = (pln: number, eur: number) => {
  if (Number.isNaN(Number(pln))) {
    throw new Error('Pln amount should be number');
  }

  const recalculatedAmount = (pln / eur).toFixed(2);
  return recalculatedAmount;
};
