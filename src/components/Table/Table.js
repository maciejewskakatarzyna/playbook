import React from 'react';
import TableRow from '../TableRow/TableRow';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Table = ({ deleteTransaction, conversionRate }) => {
  const StyledTable = styled.table`
    border: 0.1rem solid black;
    text-align: left;
    margin-bottom: 2rem;
    word-wrap: break-word;
    table-layout: fixed;
    border-collapse: collapse;

    thead {
      background: lightgrey;
      height: 3.5rem;
      border: 0.1rem solid black;

      th {
        padding: 1rem;
        border: 0.1rem solid black;
        font-weight: normal;
        line-height: 200%;
      }
    }
  `;

  const Info = styled.p`
    font-weight: bold;
    font-size: 2.4rem;
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
    return <Info>Add first transaction!</Info>;
  }
};

export default Table;
