import React from 'react';

import { PLNtoEUR } from '../../helpers/plnToEur';
import { useDispatch } from 'react-redux';
import { removeTransaction } from '../../store';

const TableRow = ({ title, amount, id, conversionRate }) => {
  const dispatch = useDispatch();

  const EUR = conversionRate;
  const PLN = amount;
  const EURamount = PLNtoEUR(PLN, EUR);

  const handleRemoveTransaction = () => {
    dispatch(removeTransaction({ id }));
  };
  return (
    <tr>
      <td>{title}</td>
      <td>{amount}</td>
      <td>{EURamount}</td>
      <td>
        <button onClick={handleRemoveTransaction}>Delete</button>
      </td>
    </tr>
  );
};

export default TableRow;
