import React, { useState } from 'react';
import { TransactionsStore } from '../store/store';

export const SumContext = React.createContext(null);

export const SumProvider = ({ children }) => {
  const [sum, setSum] = useState([]);
  const transactionsStore = TransactionsStore;

  const transactions = transactionsStore.transactions;

  const getSum = transaction => {
    setSum([...sum, parseInt(transaction.amount)]);
  };

  const getSumAfterDelete = () => {
    let sumAfterDelete = [];
    transactions.forEach(transaction => sumAfterDelete.push(parseInt(transaction.amount)));
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
