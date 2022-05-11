import React from 'react';
import { createTransactionsStore } from '../store/transactionsStore';
import { useLocalStore } from 'mobx-react';

const TransactionsContext = React.createContext(null);

export const TransactionsProvider = ({ children }) => {
  const transactionsStore = useLocalStore(createTransactionsStore);

  return (
    <TransactionsContext.Provider value={transactionsStore}>
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransactionsStore = () => React.useContext(TransactionsContext);
