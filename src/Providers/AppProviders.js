import React from 'react';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { ConversionRateProvider } from './ConversionRateProvider';
import { SumProvider } from './SumProvider';

const AppProviders = ({ children }) => {
  return (
    <ConversionRateProvider>
      <SumProvider>
        <GlobalStyle />
        {children}
      </SumProvider>
    </ConversionRateProvider>
  );
};

export default AppProviders;
