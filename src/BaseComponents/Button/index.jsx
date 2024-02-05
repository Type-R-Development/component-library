import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default function Button({
  Wrapper = 'button',
  className,
  children,
  ...rest
}) {
  return (
    <Wrapper className={`Button-Container ${className ?? ''}`} {...rest}>
      {children}
    </Wrapper>
  );
}
Button.PropTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  Wrapper: PropTypes.string,
};
