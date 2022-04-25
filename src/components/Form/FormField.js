import React from 'react';
import { Wrapper } from './FormField.styles';

const FormField = React.forwardRef(
  ({ onChange, value, label, name, id, placeholder, step, type = 'text', ...props }, ref) => {
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
