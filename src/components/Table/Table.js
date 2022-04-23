import React from 'react';
import TableRow from '../TableRow/TableRow';

const Table = ({ transactions, deleteTransaction, conversionRate }) => {
  if (transactions.length) {
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
          {transactions.map(transaction => (
            <TableRow
              transaction={transaction}
              key={transaction.id}
              deleteTransaction={deleteTransaction}
              conversionRate={conversionRate}
            />
          ))}
        </tbody>
      </table>
    );
  } else {
    return <p>Add first transaction</p>;
  }
};

export default Table;
