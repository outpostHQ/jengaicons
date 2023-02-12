import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const XFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M24.67 9.988a1 1 0 0 0-1.415-1.414l-6.295 6.295-6.295-6.295a1 1 0 1 0-1.414 1.414l6.295 6.295-6.295 6.295a1 1 0 0 0 1.414 1.414l6.295-6.295 6.295 6.295a1 1 0 0 0 1.414-1.414l-6.295-6.295 6.295-6.295Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

XFill.displayName = "XFill";

export default XFill;
