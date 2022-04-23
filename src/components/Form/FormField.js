import React from 'react';

const FormField = React.forwardRef(
  ({ onChange, value, label, name, id, placeholder, step, type = 'text', ...props }, ref) => {
    return (
      <div>
        <label htmlFor={id}>
          {label}{' '}
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
        </label>
      </div>
    );
  }
);

export default FormField;