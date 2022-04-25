import React from 'react';
import { Wrapper } from './FormField.styles';
import PropTypes from 'prop-types';

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
          step={step}
          {...props}
          ref={ref}
        />
      </Wrapper>
    );
  }
);

FormField.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  step: PropTypes.string,
};

FormField.defaultProps = {
  type: 'text',
};

export default FormField;
