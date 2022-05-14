export const PLNtoEUR = (pln: number, eur: number): number => {
  return parseFloat((pln / eur).toFixed(2));
};
