import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowFatDownRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m4 16 12 12 12-12h-6V5a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v11H4Z"
        />
      </svg>
    );
  }
);

ArrowFatDownRegular.displayName = "ArrowFatDownRegular";

export default ArrowFatDownRegular;
