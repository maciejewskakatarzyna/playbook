import React from 'react';
import TableRow from '../TableRow/TableRow';
import { useSelector } from 'react-redux';
import { ArrowDown, Info, StyledTable } from './Table.styles';

const Table = ({ conversionRate }) => {
  const transactions = useSelector(state => state.transactions);

  if (transactions.length) {
    return (
      <StyledTable>
        <thead>
          <tr>
            <th>
              <ArrowDown /> Title
            </th>
            <th>
              <ArrowDown /> Amount (PLN)
            </th>
            <th>
              <ArrowDown /> Amount (EUR)
            </th>
            <th>
              <ArrowDown /> Options
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(({ id, title, amount }) => (
            <TableRow
              id={id}
              title={title}
              amount={amount}
              key={id}
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
