import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const StarFourRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          strokeLinejoin="round"
          strokeWidth="2"
          d="m16 4.5 3.241 8.759L28 16.5l-8.759 3.241L16 28.5l-3.241-8.759L4 16.5l8.759-3.241L16 4.5Z"
        />
      </svg>
    );
  }
);

StarFourRegular.displayName = "StarFourRegular";

export default StarFourRegular;
