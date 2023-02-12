import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ShuffleAngularRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m24.4 5.277 4.242 4.243-4.242 4.242M24.4 19.644l4.242 4.243L24.4 28.13"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.643 9.52h6.72l10.48 14.367h6.8M4.643 23.873h6.72l2.62-3.592m14.66-10.775h-6.8l-2.62 3.591"
        />
      </svg>
    );
  }
);

ShuffleAngularRegular.displayName = "ShuffleAngularRegular";

export default ShuffleAngularRegular;
