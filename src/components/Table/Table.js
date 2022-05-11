import React from 'react';
import TableRow from '../TableRow/TableRow';
import { ArrowDown, Info, StyledTable } from './Table.styles';
import { useTransactionsStore } from '../../Providers/TransactionsProvider';
import { useObserver } from 'mobx-react';

const Table = () => {
  const transactionsStore = useTransactionsStore();

  return useObserver(() =>
    transactionsStore.transactions.length ? (
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
    )
  );
};

export default Table;
