import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowArcRightRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4 22c0-2.373.69-4.693 1.982-6.667a11.816 11.816 0 0 1 5.279-4.42 11.545 11.545 0 0 1 6.796-.682 11.692 11.692 0 0 1 6.022 3.284l3.921 4"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M28 11.515v6h-6"
        />
      </svg>
    );
  }
);

ArrowArcRightRegular.displayName = "ArrowArcRightRegular";

export default ArrowArcRightRegular;
