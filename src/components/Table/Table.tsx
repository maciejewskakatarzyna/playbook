import React from 'react';
import TableRow from '../TableRow/TableRow';
import { ArrowDown, Info, StyledTable } from './Table.styles';
import { observer } from 'mobx-react';
import { TransactionsStore } from '../../store/store';

const Table = observer(() => {
  const transactionsStore = TransactionsStore;

  return transactionsStore.transactions.length ? (
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
        {transactionsStore.transactions.map(({ id, title, amount }) => (
          <TableRow id={id} title={title} amount={amount} key={id} />
        ))}
      </tbody>
    </StyledTable>
  ) : (
    <Info>Add first transaction!</Info>
  );
});

export default Table;
