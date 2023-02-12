import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ClosedCaptioningFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4.96 7.283a.5.5 0 0 1 .5-.5h23a.5.5 0 0 1 .5.5v19a.5.5 0 0 1-.5.5h-23a.5.5 0 0 1-.5-.5v-19Zm8.507 7.052a2.5 2.5 0 1 0 1.279 4.198 1 1 0 1 1 1.428 1.4 4.5 4.5 0 1 1 0-6.3 1 1 0 0 1-1.428 1.4 2.5 2.5 0 0 0-1.28-.698Zm7.548.133a2.5 2.5 0 0 1 2.73.565 1 1 0 1 0 1.43-1.4 4.5 4.5 0 1 0 0 6.3 1 1 0 0 0-1.43-1.4 2.5 2.5 0 1 1-2.73-4.065Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

ClosedCaptioningFill.displayName = "ClosedCaptioningFill";

export default ClosedCaptioningFill;
