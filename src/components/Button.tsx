import React from "react";
import type * as Stitches from '@stitches/react';
import {StyledButton} from "styles/components/StyledButton";

interface ButtonProps {
  children?: any,
  onClick?: () => any,
  css?: Stitches.CSS
}

const Button = ({children, onClick, css}: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} css={css}>
      {children}
    </StyledButton>
  )
}

export default Button