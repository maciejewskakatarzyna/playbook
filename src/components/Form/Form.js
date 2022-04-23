import React from 'react';
import styled from 'styled-components';

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

const Form = () => {
  return (
    <StyledForm>
      <Wrapper>
        <label>
          Title of transaction <input type='text' />
        </label>
        <label>
          Amount (in PLN) <input type='number' />
        </label>
      </Wrapper>
      <StyledButton type='submit'>Add</StyledButton>
    </StyledForm>
  );
};

export default Form;
