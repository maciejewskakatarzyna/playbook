import React, { useContext } from 'react';
import { PLNtoEUR } from '../../helpers/plnToEur';
import { sumAmount } from '../../helpers/sumAmount';
import { useSelector } from 'react-redux';
import { ConversionRateContext } from '../../Providers/ConversionRateProvider';
import { SumContext } from '../../Providers/SumProvider';

const Sum = () => {
  const { conversionRate } = useContext(ConversionRateContext);
  const { sum } = useContext(SumContext);

  const transactions = useSelector(state => state.transactions);

  const EUR = conversionRate;

  const sumPLN = transactions.length && sumAmount(sum);
  const sumEUR = PLNtoEUR(sumPLN, EUR);
  return (
    <div>
      <p>{transactions.length ? `Sum: ${sumPLN} PLN (${sumEUR} EUR)` : null}</p>
    </div>
  );
};

export default Sum;
