import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const XCircleFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M16.96 28.283c6.627 0 12-5.373 12-12s-5.373-12-12-12c-6.628 0-12 5.373-12 12s5.372 12 12 12Zm4.707-16.707a1 1 0 0 1 0 1.414l-3.293 3.293 3.293 3.293a1 1 0 0 1-1.414 1.414l-3.293-3.293-3.293 3.293a1 1 0 0 1-1.414-1.414l3.293-3.293-3.293-3.293a1 1 0 1 1 1.414-1.414l3.293 3.293 3.293-3.293a1 1 0 0 1 1.414 0Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

XCircleFill.displayName = "XCircleFill";

export default XCircleFill;
