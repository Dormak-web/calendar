import React from "react";
import {StyledInputLabel, StyledInputLabelContent} from "@/styles/comonents/StyledInputLabel";

type InputLabelProps = {
  children: any,
  label: string,
}

const InputLabel = ({children, label, ...res}: InputLabelProps) => {
  return (
    <StyledInputLabel {...res}>
      {label}
      <StyledInputLabelContent>
        {children}
      </StyledInputLabelContent>
    </StyledInputLabel>
  )
}

export default InputLabel