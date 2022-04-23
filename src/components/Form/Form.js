import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import FormField from './FormField';
import faker from '@withshepherd/faker';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const StyledForm = styled.form`
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: 5fr 1fr;
  align-items: flex-end;
`;

const StyledButton = styled.button`
  width: 100%;
  height: 2.4rem;
`;

const Form = ({ addTransaction, getSum }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let newTransaction = {};

  const handleAddTransaction = transaction => {
    addTransaction(transaction);
  };

  const onSubmit = data => {
    newTransaction = data;
    newTransaction.id = faker.datatype.uuid();
    handleAddTransaction(newTransaction);
    getSum(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
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
            {errors.title.type === 'required' && <p>{errors.title.message}</p>}
            {errors.title.type === 'minLength' && <p>{errors.title.message}</p>}
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
