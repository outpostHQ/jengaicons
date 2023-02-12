import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const HeartRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
  const { size, color } = props;

  return (
    <svg
      style={{ width: size || 32, height: size || 32 }}
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 26.56S4 19.84 4 11.68a6.241 6.241 0 0 1 12-2.404h0a6.241 6.241 0 0 1 12 2.404c0 8.16-12 14.88-12 14.88Z"
      />
    </svg>
  );
});

HeartRegular.displayName = "HeartRegular";

export default HeartRegular;
