import React from 'react';
import styled from 'styled-components';

import { PLNtoEUR } from '../../helpers/plnToEur';
import { useDispatch } from 'react-redux';
import { removeTransaction } from '../../store';

const TableRow = ({ title, amount, id, conversionRate }) => {
  const StyledRow = styled.tr`
    background: lightgray;
    height: 3.5rem;

    td {
      padding: 1rem;
    }

    td:first-child {
      width: 50%;
    }

    button {
      background: none;
      border: none;
      cursor: pointer;
    }
  `;

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
