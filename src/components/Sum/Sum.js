import React, { useEffect, useState } from 'react';
import { PLNtoEUR } from '../../helpers/plnToEur';
import { sumAmount } from '../../helpers/sumAmount';
import { useConversionRateContext } from '../../Providers/ConversionRateProvider';
import { SumContext, useSumContext } from '../../Providers/SumProvider';
import { useTransactionsStore } from '../../Providers/TransactionsProvider';

const Sum = () => {
  const { conversionRate } = useConversionRateContext();
  const { sum } = useSumContext();
  const [sumValue, setSumValue] = useState({});
  const transactionsStore = useTransactionsStore();

  const transactions = transactionsStore.transactions;

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
