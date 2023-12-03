import React from "react";
import {StyledButton} from "styles/components/StyledButton";

const UploadFile = ({onChange}: any) => {
  return (
    <StyledButton as='input' type='file' onChange={onChange} />
  )
}

export default UploadFile