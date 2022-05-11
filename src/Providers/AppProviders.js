import React from 'react';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import ConversionRateProvider from './ConversionRateProvider';
import SumProvider from './SumProvider';
import { TransactionsProvider } from './TransactionsProvider';

const AppProviders = ({ children }) => {
  return (
    <TransactionsProvider>
      <ConversionRateProvider>
        <SumProvider>
          <GlobalStyle />
          {children}
        </SumProvider>
      </ConversionRateProvider>
    </TransactionsProvider>
  );
};

export default AppProviders;
