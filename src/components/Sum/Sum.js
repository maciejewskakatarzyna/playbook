import React, { useContext, useEffect, useState } from 'react';
import { PLNtoEUR } from '../../helpers/plnToEur';
import { sumAmount } from '../../helpers/sumAmount';
import { useSelector } from 'react-redux';
import { ConversionRateContext } from '../../Providers/ConversionRateProvider';
import { SumContext } from '../../Providers/SumProvider';

const Sum = () => {
  const { conversionRate } = useContext(ConversionRateContext);
  const { sum } = useContext(SumContext);
  const [sumValue, setSumValue] = useState({});

  const transactions = useSelector(state => state.transactions);

  const EUR = conversionRate;

  const PLNvalue = transactions.length && sumAmount(sum);
  const EURvalue = PLNtoEUR(PLNvalue, EUR);

  useEffect(() => {
    setSumValue({ sumPLN: PLNvalue, sumEUR: EURvalue });
  }, [PLNvalue, EURvalue]);

  return (
    <div>
      <p>{transactions.length ? `Sum: ${sumValue.sumPLN} PLN (${sumValue.sumEUR} EUR)` : null}</p>
    </div>
  );
};

export default Sum;
