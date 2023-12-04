import React from 'react';
import {SvgIcon} from "components/SvgIcon";

export const IconClose = (props: any) => {
  const {width = 10, height = 10, ...res} = props;

  return (
    <SvgIcon viewBox="0 0 14 14" width={width} height={height} aria-hidden="true" fill="none" {...res}>
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
    </SvgIcon>
  );
};