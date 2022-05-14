import React from 'react';
import { Wrapper } from './FormField.styles';

interface FormFieldProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value?: string | number;
  label: string;
  name: string;
  id: string;
  placeholder?: string;
  step?: string;
  type?: string;
}

const FormField = React.forwardRef(
  (
    {
      onChange,
      value,
      label,
      name,
      id,
      placeholder,
      step,
      type = 'text',
      ...props
    }: FormFieldProps,
    ref: React.LegacyRef<HTMLInputElement>
  ) => {
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
          step={step}
          {...props}
          ref={ref}
        />
      </Wrapper>
    );
  }
);

export default FormField;
