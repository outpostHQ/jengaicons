import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CornersInFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M21.76 3.783a1 1 0 0 1 1 1v6.2h6.2a1 1 0 0 1 0 2h-7.2a1 1 0 0 1-1-1v-7.2a1 1 0 0 1 1-1Zm-16.8 16.8a1 1 0 1 0 0 2h6.2v6.2a1 1 0 1 0 2 0v-7.2a1 1 0 0 0-1-1h-7.2Zm16.8 0a1 1 0 0 0-1 1v7.2a1 1 0 1 0 2 0v-6.2h6.2a1 1 0 0 0 0-2h-7.2Zm-8.6-15.8a1 1 0 0 0-2 0v6.2h-6.2a1 1 0 1 0 0 2h7.2a1 1 0 0 0 1-1v-7.2Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

CornersInFill.displayName = "CornersInFill";

export default CornersInFill;
