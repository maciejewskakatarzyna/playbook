import React from 'react';
import styled from 'styled-components';

const FormField = React.forwardRef(
  ({ onChange, value, label, name, id, placeholder, step, type = 'text', ...props }, ref) => {
    const Wrapper = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 40rem;
      margin: 1rem 0;

      input {
        padding: 0.3rem;
        width: 60%;
      }
    `;

    return (
      <Wrapper>
        <label htmlFor={id}>{label} </label>
        <input
          name={name}
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          data-testid={label}
          step={step}
          {...props}
          ref={ref}
        />
      </Wrapper>
    );
  }
);

export default FormField;
