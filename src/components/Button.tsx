import React from "react";
import type * as Stitches from '@stitches/react';
import {StyledButton} from "styles/components/StyledButton";

interface ButtonProps {
  children?: any,
  onClick?: any,
  css?: Stitches.CSS,
  size?: 'small',
  className?: string
}

const Button = (props: ButtonProps) => {
  const {
    children,
    onClick,
    ...res
  } = props;

  return (
    <StyledButton
      onClick={onClick}
      {...res}
    >
      {children}
    </StyledButton>
  )
}

export default Button