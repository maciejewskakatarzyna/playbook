import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GlobalStyle } from './assets/styles/GlobalStyle';
import { store } from './store';
import { Provider } from 'react-redux';
import ConversionRateProvider from './Providers/ConversionRateProvider';
import SumProvider from './Providers/SumProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <SumProvider>
      <ConversionRateProvider>
        <GlobalStyle />
        <App />
      </ConversionRateProvider>
    </SumProvider>
  </Provider>
);