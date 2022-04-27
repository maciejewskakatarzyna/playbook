import { sumAmount } from './sumAmount';

describe('sumAmount', () => {
  it.each`
    amounts            | expectedSum
    ${[1, 2, 3]}       | ${6}
    ${[1, 1, 1, 1, 1]} | ${5}
    ${[1.25, 5.5, 99]} | ${105.75}
    ${[0.67, 3]}       | ${3.67}
    ${[0, 5, 10]}      | ${15}
  `('calculates sum amounts from amounts arrays ', ({ amounts, expectedSum }) => {
    const result = sumAmount(amounts);
    expect(result).toBe(expectedSum);
  });
});
