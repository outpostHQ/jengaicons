import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const StampRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M5.247 28.25h21.507"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinejoin="round"
        d="M5.247 17.497h21.507v6.843H5.247z"
      />
      <path
        d="m14.045 17.497-2.083-9.612a3 3 0 0 1 2.932-3.635h2.637a3 3 0 0 1 2.904 3.752l-2.46 9.495"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
});

StampRegular.displayName = "StampRegular";

export default StampRegular;
