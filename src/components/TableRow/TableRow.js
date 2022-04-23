import React from 'react';

import { PLNtoEUR } from '../../helpers/plnToEur';

const EUR = 4.382;
const PLN = 100;

const EURamount = PLNtoEUR(PLN, EUR);

const TableRow = () => {
  return (
    <tr>
      <td>Example</td>
      <td>{PLN}</td>
      <td>{EURamount}</td>
      <td>Delete</td>
    </tr>
  );
};

export default TableRow;
