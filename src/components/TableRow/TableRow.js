import React from 'react';

import { PLNtoEUR } from '../../helpers/plnToEur';

const TableRow = ({ title, amount, id, deleteTransaction, conversionRate }) => {
  const EUR = conversionRate;
  const PLN = amount;

  const EURamount = PLNtoEUR(PLN, EUR);
  return (
    <tr>
      <td>{title}</td>
      <td>{amount}</td>
      <td>{EURamount}</td>
      <td>
        <button onClick={() => deleteTransaction(id)}>Delete</button>
      </td>
    </tr>
  );
};

export default TableRow;
