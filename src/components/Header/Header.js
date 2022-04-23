import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <Wrapper>
      <h1>List of expenses</h1>
      <p>1 EUR = 4,382 PLN</p>
    </Wrapper>
  );
};

export default Header;
