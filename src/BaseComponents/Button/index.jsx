import React from 'react';
import './style.css';

export default function Button({ children, ...rest }) {
  return <button {...rest}>{children}</button>;
}
