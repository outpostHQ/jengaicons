import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CirclesThreeRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 14.56a4.8 4.8 0 1 0 0-9.6 4.8 4.8 0 0 0 0 9.6ZM23.2 27.04a4.8 4.8 0 1 0 0-9.6 4.8 4.8 0 0 0 0 9.6ZM8.8 27.04a4.8 4.8 0 1 0 0-9.6 4.8 4.8 0 0 0 0 9.6Z"
        />
      </svg>
    );
  }
);

CirclesThreeRegular.displayName = "CirclesThreeRegular";

export default CirclesThreeRegular;
