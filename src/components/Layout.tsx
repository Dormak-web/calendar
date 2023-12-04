import React from "react";
import {StyledLayout, StyledLayoutBody, StyledLayoutHead, StyledLayoutSidebar} from "styles/components/StyledLayout";

type LayoutProps = {
  head: any,
  body: any,
  sidebar: any
}

const Layout = ({head, body, sidebar}: LayoutProps) => {
  return (
    <StyledLayout>
      <StyledLayoutHead>
        {head}
      </StyledLayoutHead>
      <StyledLayoutBody>
        {body}

        <StyledLayoutSidebar>
          {sidebar}
        </StyledLayoutSidebar>
      </StyledLayoutBody>
    </StyledLayout>
  )
}

export default Layout