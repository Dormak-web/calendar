import React from "react";
import {StyledTextField, StyledTextFieldInput} from "@/styles/comonents/StyledTextField";

type TextFieldProps = {
  label: string,
  value?: string,
  onChange: (e: string) => void
}

const TextField = ({label, value, onChange}: TextFieldProps) => {
  const handleChange = (e: any) => {
    onChange(e.target.value);
  }

  return (
    <StyledTextField>
      <StyledTextFieldInput placeholder={label} value={value} onChange={handleChange}/>
    </StyledTextField>
  )
}

export default TextField;