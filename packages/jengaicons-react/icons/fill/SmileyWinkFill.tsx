import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SmileyWinkFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
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
          d="M28.96 16.783c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12 0-6.628 5.372-12 12-12 6.627 0 12 5.372 12 12Zm-15-2.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm6-1a1 1 0 1 0 0 2h3a1 1 0 0 0 0-2h-3Zm2.698 5.634a1 1 0 0 1 .366 1.366 7.002 7.002 0 0 1-12.127 0 1 1 0 0 1 1.732-1 5.002 5.002 0 0 0 8.663 0 1 1 0 0 1 1.366-.366Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

SmileyWinkFill.displayName = "SmileyWinkFill";

export default SmileyWinkFill;
