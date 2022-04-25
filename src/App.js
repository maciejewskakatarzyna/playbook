import React, { useState } from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Table from './components/Table/Table';
import Sum from './components/Sum/Sum';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 70rem;
  display: flex;
  flex-direction: column;
  padding: 5rem;
`;

function App() {
  const [conversionRate, setConversionRate] = useState(4.382);

  const [sum, setSum] = useState([]);

  const getSum = transaction => {
    const amountInNumber = parseInt(transaction.amount);
    setSum([...sum, amountInNumber]);
  };

  return (
    <Wrapper>
      <Header conversionRate={conversionRate} setConversionRate={setConversionRate} />
      <Form getSum={getSum} />
      <Table conversionRate={conversionRate} />
      <Sum sum={sum} conversionRate={conversionRate} />
    </Wrapper>
  );
}

export default App;
