import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Header = ({ conversionRate, setConversionRate }) => {
  const handleSetConversionRate = rate => {
    setConversionRate(rate);
  };

  return (
    <Wrapper>
      <h1>List of expenses</h1>
      <p>1 EUR = </p>
      <input
        defaultValue={conversionRate}
        type='number'
        step='0.001'
        onChange={e => handleSetConversionRate(e.target.value)}
      />
      <p>PLN</p>
    </Wrapper>
  );
};

export default Header;
