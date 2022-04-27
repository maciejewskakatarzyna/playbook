import React from 'react';
import Header from './Header';
import { render, screen } from '../../test-utils';
import userEvent from '@testing-library/user-event';
import { ConversionRateContext } from '../../Providers/ConversionRateProvider';
import { clear } from '@testing-library/user-event/dist/clear';

const conversionRate = 5;

describe('Header', () => {
  it('Renders the component', () => {
    render(<Header />);
    screen.getByText(/List of expenses/i);
    screen.getByText(/1 EUR/i);
    screen.getByText(/PLN/i);
  });

  it('Renders the component with a given conversion rate', () => {
    render(
      <ConversionRateContext.Provider
        value={{
          conversionRate: conversionRate,
          handleSetConversionRate: jest.fn(),
        }}
      >
        <Header />
      </ConversionRateContext.Provider>
    );
    const input = screen.getByTestId('conversionRateInput');
    const inputValue = '2';

    expect(input).toHaveValue(conversionRate);
    clear(input);
    userEvent.type(input, inputValue);

    expect(input).toHaveValue(parseInt(inputValue));
  });
});
