import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowFatLeftRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 4 4 16l12 12v-6h11a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1H16V4Z"
        />
      </svg>
    );
  }
);

ArrowFatLeftRegular.displayName = "ArrowFatLeftRegular";

export default ArrowFatLeftRegular;
