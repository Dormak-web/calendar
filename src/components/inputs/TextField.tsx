import React from "react";
import {StyledTextField, StyledTextFieldInput} from "styles/components/StyledTextField";
import InputLabel from "components/InputLabel";

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
      <InputLabel label={label}>
        <StyledTextFieldInput value={value} onChange={handleChange}/>
      </InputLabel>
    </StyledTextField>
  )
}

export default TextField;