import React, { useContext } from 'react';
import { PLNtoEUR } from '../../helpers/plnToEur';
import { useDispatch } from 'react-redux';
import { removeTransaction } from '../../store';
import { StyledRow } from './TableRow.styles';
import { ConversionRateContext } from '../../Providers/ConversionRateProvider';

const TableRow = ({ title, amount, id }) => {
  const { conversionRate } = useContext(ConversionRateContext);
  const dispatch = useDispatch();

  const EUR = conversionRate;
  const PLN = amount;
  const EURamount = PLNtoEUR(PLN, EUR);

  const handleRemoveTransaction = () => {
    dispatch(removeTransaction({ id }));
  };
  return (
    <StyledRow>
      <td>{title}</td>
      <td>{amount}</td>
      <td>{EURamount}</td>
      <td>
        <button onClick={handleRemoveTransaction}>Delete</button>
      </td>
    </StyledRow>
  );
};

export default TableRow;
