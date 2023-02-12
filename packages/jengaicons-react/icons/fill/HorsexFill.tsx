import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const HorsexFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        fill={color || "#000000"}
        d="M18.249 26.994c5.916 0 10.711-4.796 10.711-10.711 0-5.916-4.796-10.711-10.711-10.711-.575 0-1.14.045-1.69.133V9.04L4.96 16.283l3.277 3.277c3.344-.848 5.38-.799 9.235 0l-3.39 6.593c1.28.542 2.689.84 4.167.84Z"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11.248 24.39c.84.726 1.795 1.324 2.834 1.763m0 0c1.28.542 2.689.841 4.167.841 5.916 0 10.711-4.796 10.711-10.711 0-5.916-4.796-10.711-10.711-10.711-.575 0-1.14.045-1.69.133V9.04L4.96 16.283l3.277 3.277c3.344-.848 5.38-.799 9.235 0l-3.39 6.593Z"
      />
      <path
        fill={color || "#000000"}
        d="M17.01 14.498a1.339 1.339 0 1 0 0-2.678 1.339 1.339 0 0 0 0 2.678Z"
      />
    </svg>
  );
});

HorsexFill.displayName = "HorsexFill";

export default HorsexFill;
