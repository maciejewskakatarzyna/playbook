import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export const SumContext = React.createContext({
  sum: [],
  getSum: () => {},
  getSumAfterDelete: () => {},
});

const SumProvider = ({ children }) => {
  const [sum, setSum] = useState([]);
  const transactions = useSelector(state => state.transactions);

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

export default SumProvider;
