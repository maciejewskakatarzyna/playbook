import React, { useState } from 'react';

export const SumContext = React.createContext({
  sum: [],
  getSum: () => {},
});

const SumProvider = ({ children }) => {
  const [sum, setSum] = useState([]);

  const getSum = transaction => {
    setSum([...sum, parseInt(transaction.amount)]);
  };

  return (
    <SumContext.Provider
      value={{
        sum,
        getSum,
      }}
    >
      {children}
    </SumContext.Provider>
  );
};

export default SumProvider;
