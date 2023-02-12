import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CopyrightFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.96 16.783c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12 0-6.628 5.372-12 12-12 6.627 0 12 5.372 12 12Zm-13.264-3.795a4 4 0 0 1 4.464 1.394 1 1 0 0 0 1.6-1.2 6 6 0 1 0 0 7.201 1 1 0 1 0-1.6-1.2 4 4 0 1 1-4.464-6.195Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

CopyrightFill.displayName = "CopyrightFill";

export default CopyrightFill;
