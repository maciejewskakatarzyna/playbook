import React, { useState } from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Table from './components/Table/Table';
import Sum from './components/Sum/Sum';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 70rem;
  height: 50rem;
  border: 1px solid red;
  display: grid;
  grid-template-rows: 1fr 2fr 3fr 1fr;
`;

function App() {
  const [transactions, setTransactions] = useState([]);
  const [conversionRate, setConversionRate] = useState(4.382);

  const addTransaction = transaction => {
    setTransactions([...transactions, transaction]);
  };

  const [sum, setSum] = useState([]);

  const getSum = transaction => {
    const amountInNumber = parseInt(transaction.amount);
    setSum([...sum, amountInNumber]);
  };

  const deleteTransaction = id => {
    const filteredTransactions = transactions.filter(transaction => transaction.id !== id);
    setTransactions(filteredTransactions);
  };

  return (
    <Wrapper>
      <Header conversionRate={conversionRate} setConversionRate={setConversionRate} />
      <Form addTransaction={addTransaction} getSum={getSum} />
      <Table
        transactions={transactions}
        deleteTransaction={deleteTransaction}
        conversionRate={conversionRate}
      />
      <Sum transactions={transactions} sum={sum} conversionRate={conversionRate} />
    </Wrapper>
  );
}

export default App;
