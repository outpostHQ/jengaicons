import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CopySimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M8.935 3.783a1 1 0 1 0 0 2H27.46v18.525a1 1 0 1 0 2 0V4.783a1 1 0 0 0-1-1H8.935ZM5.46 9.257a1 1 0 0 0-1 1v17.526a1 1 0 0 0 1 1h17.525a1 1 0 0 0 1-1V10.257a1 1 0 0 0-1-1H5.46Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

CopySimpleFill.displayName = "CopySimpleFill";

export default CopySimpleFill;
