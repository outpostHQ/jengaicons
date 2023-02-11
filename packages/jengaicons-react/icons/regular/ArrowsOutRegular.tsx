import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowsOutRegular = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size = 32 } = props;

    return (
      <svg
        style={{ width: size, height: size }}
        ref={ref}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        {...props}
      >
        <path
          d="M9.42 4h-6v6M11.334 11.912 3.42 4M21.246 4h6v6M19.334 11.912 27.245 4M3.42 21.825v6h6M11.334 19.913 3.42 27.825M27.246 21.825v6h-6M19.334 19.913l7.912 7.912"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

ArrowsOutRegular.displayName = "ArrowsOutRegular";

export default ArrowsOutRegular;
