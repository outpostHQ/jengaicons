import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FrameCornersFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M5.96 6.283a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-18a1 1 0 0 0-1-1h-22Zm13 3a1 1 0 1 0 0 2h5v4a1 1 0 1 0 2 0v-5a1 1 0 0 0-1-1h-6Zm-9 8a1 1 0 1 0-2 0v5a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2h-5v-4Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

FrameCornersFill.displayName = "FrameCornersFill";

export default FrameCornersFill;
