import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import FormField from './FormField';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../../store';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const StyledForm = styled.form`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 5fr 1.5fr;
  align-items: flex-end;
`;

const StyledButton = styled.button`
  padding: 0.3rem 1rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  border: 0.1rem solid black;
  cursor: pointer;
`;

const Error = styled.p`
  margin-bottom: 1.3rem;
  font-weight: bold;
  font-size: 1.6rem;
  color: red;
`;

const Form = ({ getSum }) => {
  const dispatch = useDispatch();

  const handleAddTransaction = data => {
    dispatch(addTransaction(data));
    getSum(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <StyledForm onSubmit={handleSubmit(handleAddTransaction)}>
      <Wrapper>
        <FormField
          label='Title of transaction'
          name='title'
          id='title'
          placeholder='Title of transaction'
          {...register('title', {
            required: 'Title is required',
            minLength: {
              value: 5,
              message: 'Title should have at least 5 characters',
            },
          })}
        />
        {errors.title ? (
          <>
            {errors.title.type === 'required' && <Error>{errors.title.message}</Error>}
            {errors.title.type === 'minLength' && <Error>{errors.title.message}</Error>}
          </>
        ) : null}
        <FormField
          label='Amount (in PLN)'
          name='amount'
          id='amount'
          placeholder='0'
          type='number'
          step='0.01'
          {...register('amount', {
            required: 'Amount is required',
            message: 'Amount is required',
          })}
        />
      </Wrapper>
      <StyledButton type='submit'>Add</StyledButton>
    </StyledForm>
  );
};

export default Form;
