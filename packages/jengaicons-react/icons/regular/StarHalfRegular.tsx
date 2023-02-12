import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const StarHalfRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.05 4.635v17.252M15.95 4.635l-4.82 8.682H4l7.386 5.366-2.821 8.682L15.95 22"
        />
        <path
          stroke={color || "#000000"}
          stroke-dasharray="6 6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m16.05 4.635 4.82 8.682H28l-7.386 5.366 2.821 8.682L16.05 22"
        />
      </svg>
    );
  }
);

StarHalfRegular.displayName = "StarHalfRegular";

export default StarHalfRegular;
