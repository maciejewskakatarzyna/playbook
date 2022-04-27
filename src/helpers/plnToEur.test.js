import { PLNtoEUR } from './plnToEur';
import { ConversionRateContext } from '../Providers/ConversionRateProvider';

describe('plnToEur', () => {
  const EUR = 4;

  it('throws error when provided parameter is not a number', () => {
    const result = () => PLNtoEUR('notNumber', EUR);

    expect(result).toThrowError();
    expect(result).toThrowError('Pln amount should be number');

    expect(() => PLNtoEUR(20, EUR)).not.toThrowError();
    expect(() => PLNtoEUR('20', EUR)).not.toThrowError();
  });

  it.each`
    PLNamount | expectedEUR
    ${10}     | ${'2.50'}
    ${20}     | ${'5.00'}
    ${44}     | ${'11.00'}
    ${400}    | ${'100.00'}
    ${99}     | ${'24.75'}
  `('calculates EUR amounts from PLN ', ({ PLNamount, expectedEUR }) => {
    const result = PLNtoEUR(PLNamount, EUR);
    expect(result).toBe(expectedEUR);
  });
});
