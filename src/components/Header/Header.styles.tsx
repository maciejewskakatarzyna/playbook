import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    opacity: 1;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  input {
    width: 7rem;
    border: none;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-weight: normal;
`;
