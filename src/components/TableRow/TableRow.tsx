import React, { useEffect } from 'react';
import { PLNtoEUR } from '../../helpers/plnToEur';
import { StyledRow } from './TableRow.styles';
import { useConversionRateContext } from '../../Providers/ConversionRateProvider';
import { useSumContext } from '../../Providers/SumProvider';
import { Transaction, TransactionsStore } from '../../store/store';

const TableRow = ({ title, amount, id }: Transaction) => {
  const { conversionRate } = useConversionRateContext();
  const { getSumAfterDelete, sum } = useSumContext();
  const transactionsStore = TransactionsStore;

  const EUR = conversionRate;
  const PLN = amount;
  const EURamount = PLNtoEUR(PLN, EUR);

  const handleRemoveTransaction = () => {
    transactionsStore.removeTransaction(id);
  };

  useEffect(() => {
    getSumAfterDelete();
  }, [sum]);

  return (
    <StyledRow data-testid='transactionRow'>
      <td data-testid='transactionTitle'>{title}</td>
      <td>{amount}</td>
      <td>{EURamount}</td>
      <td>
        <button onClick={handleRemoveTransaction}>Delete</button>
      </td>
    </StyledRow>
  );
};

export default TableRow;
