import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const IntersectRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M12.308 20.615a8.308 8.308 0 1 0 0-16.615 8.308 8.308 0 0 0 0 16.615Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19.692 28a8.308 8.308 0 1 0 0-16.615 8.308 8.308 0 0 0 0 16.615ZM15.367 12.598l4.035 4.035M12.598 15.367l4.035 4.035"
        />
      </svg>
    );
  }
);

IntersectRegular.displayName = "IntersectRegular";

export default IntersectRegular;
