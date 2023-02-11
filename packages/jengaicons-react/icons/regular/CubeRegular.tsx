import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CubeRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
  const { size = 32 } = props;

  return (
    <svg
      style={{ width: size, height: size }}
      ref={ref}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        d="m5.216 10.003 10.722-6 10.722 6V22l-10.722 6-10.722-6V10.003Z"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M26.66 10.004 16.107 16 5.34 10.003"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.057 15.82v11.879"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
});

CubeRegular.displayName = "CubeRegular";

export default CubeRegular;
