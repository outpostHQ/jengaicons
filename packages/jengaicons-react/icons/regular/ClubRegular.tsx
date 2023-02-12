import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ClubRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="m12.466 27.38 1.711-5.354a5.672 5.672 0 1 1-4.319-9.35c.486 0 .952.005 1.402.12a5.672 5.672 0 1 1 9.472 0c.445-.113.928-.12 1.41-.12a5.672 5.672 0 1 1-4.197 9.488l1.595 5.224a.473.473 0 0 1-.452.612h-6.173a.473.473 0 0 1-.45-.62Z"
      />
    </svg>
  );
});

ClubRegular.displayName = "ClubRegular";

export default ClubRegular;
