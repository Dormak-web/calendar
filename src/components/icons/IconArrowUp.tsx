import React from 'react';
import {SvgIcon} from "components/SvgIcon";

export const IconArrowUp = (props: any) => {
  const {width = 15, height = 25, ...res} = props;

  return (
    <SvgIcon viewBox="0 0 14 8" width={width} height={height} aria-hidden="true" fill="none" {...res}>
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"/>
    </SvgIcon>
  );
};