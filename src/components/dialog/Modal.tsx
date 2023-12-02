import React, {useCallback, useRef} from "react";
import {StyledModal} from "styles/components/dialog/StyledModal";

const Modal = ({children, open, setOpen}: any) => {
  const modalRef = useRef(null);

  const onClick = useCallback(
    ({target}: any) => {
      const {current: el} = modalRef;

      if (target === el) setOpen(false);
    },
    [setOpen]
  );

  return (
    <StyledModal ref={modalRef} show={!!open} onMouseDown={onClick}>
      {children}
    </StyledModal>
  )
}

export default Modal;