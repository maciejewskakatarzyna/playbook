import React from 'react';
import TableRow from '../TableRow/TableRow';
import { useSelector } from 'react-redux';

const Table = ({ deleteTransaction, conversionRate }) => {
  const transactions = useSelector(state => state.transactions);

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
          {transactions.map(({ id, title, amount }) => (
            <TableRow
              id={id}
              title={title}
              amount={amount}
              key={id}
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
