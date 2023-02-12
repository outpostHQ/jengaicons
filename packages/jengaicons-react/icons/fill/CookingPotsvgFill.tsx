import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CookingPotsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M13.76 6.683v3.2M16.96 6.683v3.2M20.16 6.683v3.2M28.96 14.683l-3.2 2.4M4.96 14.683l3.2 2.4"
        />
        <path
          fill={color || "#000000"}
          d="M8.16 13.083h17.6v10.8a2 2 0 0 1-2 2h-13.6a2 2 0 0 1-2-2v-10.8Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8.16 13.083h17.6v10.8a2 2 0 0 1-2 2h-13.6a2 2 0 0 1-2-2v-10.8Z"
        />
      </svg>
    );
  }
);

CookingPotsvgFill.displayName = "CookingPotsvgFill";

export default CookingPotsvgFill;
