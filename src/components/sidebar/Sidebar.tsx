import React from "react";
import {StyledSidebar, StyledSidebarContent, StyledSidebarHead} from "styles/components/StyledSidebar";
import Button from "components/Button";
import {IconClose} from "components/icons";

type SidebarProps = {
  open: boolean,
  onClose: Function,
  children: any,
  title: string,
}

const Sidebar = ({open = false, children, title, onClose}: SidebarProps) => {
  return (
    <StyledSidebar open={open}>
      <StyledSidebarHead>
        <Button onClick={onClose} size='small'><IconClose /></Button>

        {title}
      </StyledSidebarHead>

      <StyledSidebarContent>
        {children}
      </StyledSidebarContent>
    </StyledSidebar>
  )
}

export default Sidebar