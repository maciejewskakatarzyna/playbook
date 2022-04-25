import React, { useState } from 'react';

export const ConversionRateContext = React.createContext({
  conversionRate: null,
  handleSetConversionRate: () => {},
});

const ConversionRateProvider = ({ children }) => {
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

export default ConversionRateProvider;
