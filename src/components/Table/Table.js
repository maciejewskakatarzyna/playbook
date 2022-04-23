import React from 'react';
import TableRow from '../TableRow/TableRow';

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
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
      </tbody>
    </table>
  );
};

export default Table;
