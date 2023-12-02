import React from "react";
import Modal from "components/dialog/Modal";
import {StyledDialog, StyledDialogContent} from "styles/components/dialog/StyledDialog";
import DialogHead from "components/dialog/DialogHead";
import DialogActions from "components/dialog/DialogActions";

const Dialog = ({open, setOpen, children}: any) => {
  return (
    <Modal open={open} setOpen={setOpen}>
      <StyledDialog>
        <DialogHead onClose={() => setOpen(false)}/>
        <StyledDialogContent>
          {children}
        </StyledDialogContent>
        <DialogActions />
      </StyledDialog>
    </Modal>
  )
}

export default Dialog