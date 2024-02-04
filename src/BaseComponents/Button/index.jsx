import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default function Button({ className, children, ...rest }) {
  return (
    <button className={`Button-Container ${className ?? ''}`} {...rest}>
      {children}
    </button>
  );
}
Button.PropTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
