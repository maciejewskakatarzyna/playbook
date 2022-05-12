import React, { ReactNode } from 'react';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { ConversionRateProvider } from './ConversionRateProvider';
import { SumProvider } from './SumProvider';

const AppProviders = ({ children }: { children: ReactNode }) => {
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
