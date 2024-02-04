import React from 'react';
import './style.css';

export default function Button({ className, children, ...rest }) {
  return <button className={`Button-Container ${className ?? ''}`} {...rest}>{children}</button>;
}
