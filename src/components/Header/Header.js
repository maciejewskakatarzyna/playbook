import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    opacity: 1;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  input {
    width: 7rem;
    border: none;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-weight: normal;
`;

const Header = ({ conversionRate, setConversionRate }) => {
  const handleSetConversionRate = rate => {
    setConversionRate(rate);
  };

  return (
    <Wrapper>
      <Title>List of expenses</Title>
      <div>
        {' '}
        <p>1 EUR = </p>
        <input
          defaultValue={conversionRate}
          type='number'
          step='0.001'
          onChange={e => handleSetConversionRate(e.target.value)}
        />
        <p>PLN</p>
      </div>
    </Wrapper>
  );
};

export default Header;
