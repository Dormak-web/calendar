import React from 'react';
import {SvgIcon} from "components/SvgIcon";

export const IconTrash = (props: any) => {
  const {width = 15, height = 15, ...res} = props;

  return (
    <SvgIcon viewBox="0 0 18 20" width={width} height={height} aria-hidden="true" fill="none" {...res}>
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"/>
    </SvgIcon>
  );
};