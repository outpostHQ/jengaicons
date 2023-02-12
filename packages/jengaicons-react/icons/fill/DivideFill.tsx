import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DivideFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        fillRule="evenodd"
        d="M16.96 11.248a1.678 1.678 0 1 0 0-3.357 1.678 1.678 0 0 0 0 3.357ZM6.73 16.283a1 1 0 0 1 1-1H26.19a1 1 0 1 1 0 2H7.729a1 1 0 0 1-1-1Zm11.909 6.713a1.678 1.678 0 1 1-3.357 0 1.678 1.678 0 0 1 3.357 0Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

DivideFill.displayName = "DivideFill";

export default DivideFill;
