import { PLNtoEUR } from './plnToEur';

describe('plnToEur', () => {
  const EUR = 4;

  it.each`
    PLNamount | expectedEUR
    ${10}     | ${2.5}
    ${20}     | ${5.0}
    ${44}     | ${11.0}
    ${400}    | ${100.0}
    ${99}     | ${24.75}
  `('calculates EUR amounts from PLN ', ({ PLNamount, expectedEUR }) => {
    const result = PLNtoEUR(PLNamount, EUR);
    expect(result).toBe(expectedEUR);
  });
});
