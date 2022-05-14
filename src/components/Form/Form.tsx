import React from 'react';
import { useForm } from 'react-hook-form';
import FormField from './FormField';
import { Error, StyledButton, StyledForm, Wrapper } from './Form.styles';
import { useSumContext } from '../../Providers/SumProvider';
import { Transaction, TransactionsStore } from '../../store/store';

const Form = () => {
  const { getSum } = useSumContext();
  const transactionsStore = TransactionsStore;

  const handleAddTransaction = (data: Transaction) => {
    transactionsStore.addTransaction(data);
    getSum(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Transaction>();

  return (
    <StyledForm onSubmit={handleSubmit(handleAddTransaction)}>
      <Wrapper>
        <FormField
          label='Title of transaction'
          id='title'
          placeholder='Title of transaction'
          {...register('title', {
            required: 'Title is required',
            minLength: {
              value: 5,
              message: 'Title should have at least 5 characters',
            },
          })}
          name='title'
        />
        {errors.title ? (
          <>
            {errors.title.type === 'required' && <Error>{errors.title.message}</Error>}
            {errors.title.type === 'minLength' && <Error>{errors.title.message}</Error>}
          </>
        ) : null}
        <FormField
          label='Amount (in PLN)'
          id='amount'
          placeholder='0'
          type='number'
          step='0.01'
          {...register('amount', {
            required: 'Amount is required',
          })}
          name='amount'
        />
      </Wrapper>
      <StyledButton type='submit'>Add</StyledButton>
    </StyledForm>
  );
};

export default Form;
