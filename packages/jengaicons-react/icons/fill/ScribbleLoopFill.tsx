import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ScribbleLoopFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.96 12.372s3.556-4.978 8.889-4.978c11.555 0 10.666 17.778 0 17.778-7.111 0-7.111-10.667 3.555-10.667 7.111 0 11.556 5.333 11.556 5.333"
        />
      </svg>
    );
  }
);

ScribbleLoopFill.displayName = "ScribbleLoopFill";

export default ScribbleLoopFill;
