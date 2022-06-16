import PropTypes from 'prop-types';
import React from 'react';
import './Input.css';
function Input(props) {
  const { size, ...rest } = props;
  return <input className={`input ${size}`} {...rest} />;
}

Input.defaultProps = {
  size: 'large'
};

Input.propTypes = {
  size: PropTypes.string
};

export default Input;
