import React, { useContext, useEffect } from 'react';
import { PLNtoEUR } from '../../helpers/plnToEur';
import { useDispatch } from 'react-redux';
import { removeTransaction } from '../../store';
import { StyledRow } from './TableRow.styles';
import { ConversionRateContext } from '../../Providers/ConversionRateProvider';
import PropTypes from 'prop-types';
import { SumContext } from '../../Providers/SumProvider';

const TableRow = ({ title, amount, id }) => {
  const { conversionRate } = useContext(ConversionRateContext);
  const { getSumAfterDelete, sum } = useContext(SumContext);

  const dispatch = useDispatch();

  const EUR = conversionRate;
  const PLN = amount;
  const EURamount = PLNtoEUR(PLN, EUR);

  const handleRemoveTransaction = () => {
    dispatch(removeTransaction({ id }));
  };

  useEffect(() => {
    getSumAfterDelete();
  }, [sum]);

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

TableRow.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.string,
  id: PropTypes.string,
};

export default TableRow;
