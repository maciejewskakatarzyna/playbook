import React, { useEffect, useState } from 'react';
import { PLNtoEUR } from '../../helpers/plnToEur';
import { sumAmount } from '../../helpers/sumAmount';
import { useConversionRateContext } from '../../Providers/ConversionRateProvider';
import { useSumContext } from '../../Providers/SumProvider';
import { TransactionsStore } from '../../store/store';

interface ISumValue {
  sumPLN: number;
  sumEUR: number;
}

const Sum = () => {
  const { conversionRate } = useConversionRateContext();
  const { sum } = useSumContext();
  const [sumValue, setSumValue] = useState<ISumValue>({ sumPLN: 0, sumEUR: 0 });
  const transactionsStore = TransactionsStore;

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
