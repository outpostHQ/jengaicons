import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ScribbleLoopRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4 12.089S7.556 7.11 12.889 7.11c11.555 0 10.667 17.778 0 17.778-7.111 0-7.111-10.667 3.555-10.667 7.112 0 11.556 5.333 11.556 5.333"
        />
      </svg>
    );
  }
);

ScribbleLoopRegular.displayName = "ScribbleLoopRegular";

export default ScribbleLoopRegular;
