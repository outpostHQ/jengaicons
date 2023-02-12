import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const HourglassSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M24.21 4.783H9.71a1 1 0 0 0-1 1v1.54a10 10 0 0 0 4.373 8.268l1.752 1.192-1.752 1.192a10 10 0 0 0-4.374 8.267v1.541a1 1 0 0 0 1 1h14.502a1 1 0 0 0 1-1v-1.54a10 10 0 0 0-4.374-8.268l-1.752-1.192 1.752-1.192a10 10 0 0 0 4.373-8.267V5.783a1 1 0 0 0-1-1Z"
        />
      </svg>
    );
  }
);

HourglassSimpleFill.displayName = "HourglassSimpleFill";

export default HourglassSimpleFill;
