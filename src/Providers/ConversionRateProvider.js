import React, { useState } from 'react';

export const ConversionRateContext = React.createContext(null);

export const ConversionRateProvider = ({ children }) => {
  const [conversionRate, setConversionRate] = useState(4.382);

  const handleSetConversionRate = rate => {
    setConversionRate(rate);
  };

  return (
    <ConversionRateContext.Provider
      value={{
        conversionRate,
        handleSetConversionRate,
      }}
    >
      {children}
    </ConversionRateContext.Provider>
  );
};

export const useConversionRateContext = () => {
  const conversionRateContext = React.useContext(ConversionRateContext);
  if (!conversionRateContext) {
    throw new Error('Missing ConversionRateContext data!');
  }
  return conversionRateContext;
};
