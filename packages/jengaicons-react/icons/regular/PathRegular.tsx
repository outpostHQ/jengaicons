import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PathRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M24.992 26.48a3.008 3.008 0 1 0 0-6.015 3.008 3.008 0 0 0 0 6.015Z"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeWidth="2"
        d="M9.017 5.52h11.896c2.22 0 4.02 1.8 4.02 4.02v0c0 2.219-1.8 4.019-4.02 4.019H8.936A4.936 4.936 0 0 0 4 18.495v0a4.936 4.936 0 0 0 4.936 4.936h13.03"
      />
    </svg>
  );
});

PathRegular.displayName = "PathRegular";

export default PathRegular;
