import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowsInRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M26 20h-6v6M28 28l-8-8M6 20h6v6M4 28l8-8M20 6v6h6M28 4l-8 8M12 6v6H6M4 4l8 8"
        />
      </svg>
    );
  }
);

ArrowsInRegular.displayName = "ArrowsInRegular";

export default ArrowsInRegular;
