import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const GlobeStandFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M10.78 5.748A1 1 0 0 0 9.31 4.394 12.613 12.613 0 0 0 17.32 25.48v1.802h-2.738a1 1 0 1 0 0 2h7.475a1 1 0 1 0 0-2h-2.737v-1.759a12.613 12.613 0 0 0 7.81-3.31 1 1 0 1 0-1.355-1.471A10.612 10.612 0 0 1 10.781 5.748Zm16.161 6.945a8.41 8.41 0 1 1-16.82 0 8.41 8.41 0 0 1 16.82 0Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

GlobeStandFill.displayName = "GlobeStandFill";

export default GlobeStandFill;
