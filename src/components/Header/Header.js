import React from 'react';
import styled from 'styled-components';
import { Wrapper } from './Header.styles';

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
