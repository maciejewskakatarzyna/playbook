import React from 'react';
import { PLNtoEUR } from '../../helpers/plnToEur';

const EUR = 4.382;
const PLN = 100;

const EURamount = PLNtoEUR(PLN, EUR);

const Table = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Amount (PLN)</th>
          <th>Amount (EUR)</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Example</td>
          <td>123</td>
          <td>{EURamount}</td>
          <td>Delete</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
