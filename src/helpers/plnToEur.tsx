export const PLNtoEUR = (pln: number, eur: number): number => {
  if (Number.isNaN(Number(pln))) {
    throw new Error('Pln amount should be number');
  }

  return parseInt((pln / eur).toFixed(2));
};
