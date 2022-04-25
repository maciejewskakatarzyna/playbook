import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const StyledForm = styled.form`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 5fr 1.5fr;
  align-items: flex-end;
`;

export const StyledButton = styled.button`
  padding: 0.3rem 1rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  border: 0.1rem solid black;
  cursor: pointer;
`;

export const Error = styled.p`
  margin-bottom: 1.3rem;
  font-weight: bold;
  font-size: 1.6rem;
  color: red;
`;
