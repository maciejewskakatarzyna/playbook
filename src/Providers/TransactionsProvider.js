import React from 'react';
import { createTransactionsStore } from '../store/transactionsStore';
import { useLocalObservable } from 'mobx-react';

const TransactionsContext = React.createContext(null);

export const TransactionsProvider = ({ children }) => {
  const transactionsStore = useLocalObservable(createTransactionsStore);

  return (
    <TransactionsContext.Provider value={transactionsStore}>
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransactionsStore = () => {
  const transactionsContext = React.useContext(TransactionsContext);
  if (!transactionsContext) {
    throw new Error('Missing TransactionsContext data!');
  }
  return transactionsContext;
};
