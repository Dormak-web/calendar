import React from "react";
import type * as Stitches from '@stitches/react';
import {StyledButton} from "styles/components/StyledButton";

interface ButtonProps {
  children?: any,
  onClick?: any,
  css?: Stitches.CSS,
  size?: 'small',
  className?: string,
  disabled?: Boolean
}

const Button = (props: ButtonProps) => {
  const {
    children,
    onClick,
    disabled,
    ...res
  } = props;

  return (
    <StyledButton
      onClick={onClick}
      disabled={!!disabled}
      {...res}
    >
      {children}
    </StyledButton>
  )
}

export default Button