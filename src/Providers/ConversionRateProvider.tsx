import React, { ReactNode, useState } from 'react';

interface IConversionRateContext {
  conversionRate: number;
  handleSetConversionRate: (rate: string) => void;
}

export const ConversionRateContext = React.createContext<IConversionRateContext | null>(null);

export const ConversionRateProvider = ({ children }: { children: ReactNode }) => {
  const [conversionRate, setConversionRate] = useState<number>(4.382);

  const handleSetConversionRate = (rate: string) => {
    setConversionRate(parseInt(rate));
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
