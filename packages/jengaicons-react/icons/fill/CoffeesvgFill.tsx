import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CoffeesvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M11.422 5.206v3.692M15.114 5.206v3.692M18.806 5.206v3.692M4.96 27.36h20.308"
        />
        <path
          fill={color || "#000000"}
          d="M10.879 27.36a10.156 10.156 0 0 1-5.919-9.231V12.59h20.308v5.539a10.156 10.156 0 0 1-5.919 9.231"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10.879 27.36a10.156 10.156 0 0 1-5.919-9.231V12.59h20.308v5.539a10.156 10.156 0 0 1-5.919 9.231"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M25.268 12.59a3.692 3.692 0 0 1 3.692 3.693v.923a3.693 3.693 0 0 1-3.692 3.692h-.39"
        />
      </svg>
    );
  }
);

CoffeesvgFill.displayName = "CoffeesvgFill";

export default CoffeesvgFill;
