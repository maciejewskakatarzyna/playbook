import React from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Table from './components/Table/Table';
import Sum from './components/Sum/Sum';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-width: 80rem;
  display: flex;
  flex-direction: column;
  padding: 5rem;
`;

function App() {
  return (
    <Wrapper>
      <Header />
      <Form />
      <Table />
      <Sum />
    </Wrapper>
  );
}

export default App;
