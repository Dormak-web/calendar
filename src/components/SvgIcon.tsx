import React from 'react';

export const SvgIcon = ({ children, viewBox, width = 18, height = 18, ...res}: any) => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      {...res}
    >
      {children}
    </svg>
  );
};