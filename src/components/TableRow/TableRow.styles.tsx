import styled from 'styled-components';

export const StyledRow = styled.tr`
  height: 3.5rem;
  border: 0.1rem solid black;

  &:nth-child(even) {
    background: #efefef;
  }

  td {
    padding: 1rem;
    border: 0.1rem solid black;
    line-height: 200%;
  }

  td:first-child {
    width: 35%;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;
