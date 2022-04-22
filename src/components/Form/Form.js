import React from 'react';

const Form = () => {
  return (
    <form>
      <label>Title of transaction</label>
      <input type='text' />
      <label>Amount (in PLN)</label>
      <input type='number' />
      <button type='submit'>Add</button>
    </form>
  );
};

export default Form;
