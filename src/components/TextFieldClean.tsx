import React from "react";
import {StyledTextFieldClean} from "styles/components/StyledTextFieldClean";

const TextFieldClean = ({value, onChange, ...res}: any) => {
  return (
    <StyledTextFieldClean value={value} onChange={onChange} {...res}>

    </StyledTextFieldClean>
  )
}

export default TextFieldClean