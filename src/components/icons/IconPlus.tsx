import React from 'react';
import {SvgIcon} from "components/SvgIcon";

export const IconArrowPlus = (props: any) => {
  const {width = 10, height = 10, ...res} = props;

  return (
    <SvgIcon viewBox="0 0 18 18" width={width} height={height} aria-hidden="true" fill="none" {...res}>
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
    </SvgIcon>
  );
};