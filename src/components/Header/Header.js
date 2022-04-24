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
    font-size: 1.8rem;
    border: none;
    text-align: center;
  }
`;

const Header = ({ conversionRate, setConversionRate }) => {
  const handleSetConversionRate = rate => {
    setConversionRate(rate);
  };

  return (
    <Wrapper>
      <h1>List of expenses</h1>
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
