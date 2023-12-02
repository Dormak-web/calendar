import React, {useEffect, useRef} from "react";
import {StyledTextFieldClean} from "styles/components/StyledTextFieldClean";

const TextFieldClean = ({value, onChange, ...res}: any) => {
  const textAreaRef: any = useRef(null);

  const resizeTextArea = () => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  };

  useEffect(resizeTextArea, [value]);

  return (
    <StyledTextFieldClean ref={textAreaRef} value={value} onChange={onChange} {...res}>
    </StyledTextFieldClean>
  )
}

export default TextFieldClean