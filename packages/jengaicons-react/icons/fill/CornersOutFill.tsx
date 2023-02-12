import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CornersOutFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M23.003 3.87a1 1 0 1 0 0 2h5.044v5.044a1 1 0 0 0 2 0V4.87a1 1 0 0 0-1-1h-6.044Zm-17.956 0a1 1 0 0 0-1 1v6.044a1 1 0 1 0 2 0V5.87h5.044a1 1 0 1 0 0-2H5.047Zm0 17.956a1 1 0 0 1 1 1v5.044h5.044a1 1 0 0 1 0 2H5.047a1 1 0 0 1-1-1v-6.044a1 1 0 0 1 1-1Zm25 1a1 1 0 1 0-2 0v5.044h-5.044a1 1 0 1 0 0 2h6.044a1 1 0 0 0 1-1v-6.044Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

CornersOutFill.displayName = "CornersOutFill";

export default CornersOutFill;
