import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowsOutSimpleRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M21.85 4.15h6v6M19.425 12.575l8.426-8.426M4 22v6h6M12.425 19.575 4 28"
        />
      </svg>
    );
  }
);

ArrowsOutSimpleRegular.displayName = "ArrowsOutSimpleRegular";

export default ArrowsOutSimpleRegular;
