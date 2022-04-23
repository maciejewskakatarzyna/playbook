import React from 'react';
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
