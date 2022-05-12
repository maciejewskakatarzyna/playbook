import React, { ReactNode, useState } from 'react';
import { Transaction, TransactionsStore } from '../store/store';

interface ISumContext {
  sum: number[];
  getSum: (transaction: Transaction) => void;
  getSumAfterDelete: () => void;
}

export const SumContext = React.createContext<ISumContext | null>(null);

export const SumProvider = ({ children }: { children: ReactNode }) => {
  const [sum, setSum] = useState<number[]>([]);
  const transactionsStore = TransactionsStore;

  const transactions = transactionsStore.transactions;

  const getSum = (transaction: Transaction) => {
    setSum([...sum, parseInt(String(transaction.amount))]);
  };

  const getSumAfterDelete = () => {
    let sumAfterDelete: number[] = [];
    transactions.forEach(transaction => sumAfterDelete.push(parseInt(String(transaction.amount))));
    setSum(sumAfterDelete);
  };

  return (
    <SumContext.Provider
      value={{
        sum,
        getSum,
        getSumAfterDelete,
      }}
    >
      {children}
    </SumContext.Provider>
  );
};

export const useSumContext = () => {
  const sumContext = React.useContext(SumContext);
  if (!sumContext) {
    throw new Error('Missing SumContext data!');
  }
  return sumContext;
};
