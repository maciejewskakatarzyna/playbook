import React from 'react';
import { PLNtoEUR } from '../../helpers/plnToEur';
import { sumAmount } from '../../helpers/sumAmount';
import { useSelector } from 'react-redux';

const Sum = ({ sum, conversionRate }) => {
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
