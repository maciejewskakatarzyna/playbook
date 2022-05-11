import React from 'react';
import { Title, Wrapper } from './Header.styles';
import { useConversionRateContext } from '../../Providers/ConversionRateProvider';

const Header = () => {
  const { conversionRate, handleSetConversionRate } = useConversionRateContext();

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
          min='0.001'
          data-testid='conversionRateInput'
          onChange={e => handleSetConversionRate(e.target.value)}
        />
        <p>PLN</p>
      </div>
    </Wrapper>
  );
};

export default Header;
