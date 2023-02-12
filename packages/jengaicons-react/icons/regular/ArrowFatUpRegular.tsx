import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowFatUpRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4 16 16 4l12 12h-6v11a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1V16H4Z"
        />
      </svg>
    );
  }
);

ArrowFatUpRegular.displayName = "ArrowFatUpRegular";

export default ArrowFatUpRegular;
