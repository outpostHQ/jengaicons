import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowArcLeftRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28 22c0-2.373-.69-4.693-1.982-6.667a11.815 11.815 0 0 0-5.279-4.42 11.545 11.545 0 0 0-6.796-.682 11.692 11.692 0 0 0-6.022 3.284l-3.921 4"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 11.515v6h6"
        />
      </svg>
    );
  }
);

ArrowArcLeftRegular.displayName = "ArrowArcLeftRegular";

export default ArrowArcLeftRegular;
