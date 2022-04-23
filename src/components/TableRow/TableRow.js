import React from 'react';

import { PLNtoEUR } from '../../helpers/plnToEur';

const TableRow = ({ transaction, deleteTransaction, conversionRate }) => {
  const EUR = conversionRate;
  const PLN = transaction.amount;

  const EURamount = PLNtoEUR(PLN, EUR);
  return (
    <tr>
      <td>{transaction.title}</td>
      <td>{transaction.amount}</td>
      <td>{EURamount}</td>
      <td>
        <button onClick={() => deleteTransaction(transaction.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default TableRow;
