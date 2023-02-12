import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BeerBottlesvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M24.16 5.82 27.338 9"
        />
        <path
          fill={color || "#000000"}
          d="m19.39 20.128-6.36-6.36-5.564 5.565 6.36 6.359 5.564-5.564Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m19.39 20.128-6.36-6.36-5.564 5.565 6.36 6.359 5.564-5.564Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m18.895 11.093 6.032-4.362 1.558 1.558-4.363 6.03-.946 4.229-9.735 9.735-6.342-6.62 9.596-9.597 4.2-.973Z"
        />
      </svg>
    );
  }
);

BeerBottlesvgFill.displayName = "BeerBottlesvgFill";

export default BeerBottlesvgFill;
