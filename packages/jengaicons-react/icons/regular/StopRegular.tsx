import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const StopRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinejoin="round"
        d="M6 6.5h20v20H6z"
      />
    </svg>
  );
});

StopRegular.displayName = "StopRegular";

export default StopRegular;
