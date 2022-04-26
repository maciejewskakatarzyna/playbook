import React from 'react';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
// @ts-ignore
import ConversionRateProvider from './ConversionRateProvider';
// @ts-ignore
import SumProvider from './SumProvider';
import { store } from '../store';
import { Provider } from 'react-redux';

const AppProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <ConversionRateProvider>
        <SumProvider>
          <GlobalStyle />
          {children}
        </SumProvider>
      </ConversionRateProvider>
    </Provider>
  );
};

export default AppProviders;
