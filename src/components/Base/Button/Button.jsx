import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

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
