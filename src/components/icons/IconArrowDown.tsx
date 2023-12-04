import React from 'react';
import {SvgIcon} from "components/SvgIcon";

export const IconArrowDown = (props: any) => {
  const {width = 15, height = 25, ...res} = props;

  return (
    <SvgIcon viewBox="0 0 14 8" width={width} height={height} aria-hidden="true" fill="none" {...res}>
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
    </SvgIcon>
  );
};