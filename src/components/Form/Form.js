import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import FormField from './FormField';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../../store';
import { Error, StyledButton, StyledForm, Wrapper } from './Form.styles';
import { SumContext } from '../../Providers/SumProvider';

const Form = () => {
  const { getSum } = useContext(SumContext);
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
