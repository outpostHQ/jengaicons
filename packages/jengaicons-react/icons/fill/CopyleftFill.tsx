import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CopyleftFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M28.96 16.283c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12s5.372-12 12-12c6.627 0 12 5.373 12 12Zm-13.193-3.818a4 4 0 1 1-2.007 6.218 1 1 0 1 0-1.6 1.2 5.999 5.999 0 1 0 0-7.2 1 1 0 1 0 1.6 1.2 4 4 0 0 1 2.007-1.418Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

CopyleftFill.displayName = "CopyleftFill";

export default CopyleftFill;
