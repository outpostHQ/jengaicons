import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PlanetRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 25.87a9.37 9.37 0 1 0 0-18.74 9.37 9.37 0 0 0 0 18.74Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21.984 9.291c2.95-.81 5.165-.735 5.825.394 1.171 2.034-3.163 6.74-9.68 10.5-6.516 3.758-12.756 5.164-13.938 3.13-.65-1.129.394-3.088 2.566-5.24"
        />
      </svg>
    );
  }
);

PlanetRegular.displayName = "PlanetRegular";

export default PlanetRegular;
