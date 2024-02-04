import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Button = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>;
};

Button.PropTypes = {
  children: PropTypes.node.isRequired,
};
export default Button;
