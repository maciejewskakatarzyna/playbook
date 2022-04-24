import React from 'react';
import TableRow from '../TableRow/TableRow';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Table = ({ deleteTransaction, conversionRate }) => {
  const StyledTable = styled.table`
    border: 1px solid black;
    text-align: center;
    margin-bottom: 2rem;
    word-wrap: break-word;
    table-layout: fixed;

    thead {
      background: gray;
      height: 3.5rem;

      th {
        padding: 1rem;
      }
    }
  `;

  const transactions = useSelector(state => state.transactions);

  if (transactions.length) {
    return (
      <StyledTable>
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
      </StyledTable>
    );
  } else {
    return <p>Add first transaction</p>;
  }
};

export default Table;
