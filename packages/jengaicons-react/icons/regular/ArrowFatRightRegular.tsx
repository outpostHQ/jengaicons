import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowFatRightRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m16 4 12 12-12 12v-6H5a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h11V4Z"
        />
      </svg>
    );
  }
);

ArrowFatRightRegular.displayName = "ArrowFatRightRegular";

export default ArrowFatRightRegular;
