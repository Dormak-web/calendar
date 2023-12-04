import React from "react";
import {StyledDialogHead} from "styles/components/dialog/StyledDialogHead";
import Button from "components/Button";

const DialogHead = ({onClose}: any) => {
  return (
    <StyledDialogHead>
      <Button>X</Button>
      <b>Title</b>
      <Button onClick={onClose}>X</Button>
    </StyledDialogHead>
  )
}

export default DialogHead