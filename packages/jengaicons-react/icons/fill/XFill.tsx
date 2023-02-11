import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const XFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M24.67 9.988a1 1 0 0 0-1.415-1.414l-6.295 6.295-6.295-6.295a1 1 0 1 0-1.414 1.414l6.295 6.295-6.295 6.295a1 1 0 0 0 1.414 1.414l6.295-6.295 6.295 6.295a1 1 0 0 0 1.414-1.414l-6.295-6.295 6.295-6.295Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

XFill.displayName = "XFill";

export default XFill;
