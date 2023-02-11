import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BeerBottlesvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size = 32 } = props;

    return (
      <svg
        style={{ width: size, height: size }}
        ref={ref}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        {...props}
      >
        <path
          d="M24.16 5.82 27.338 9"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m19.39 20.128-6.36-6.36-5.564 5.565 6.36 6.359 5.564-5.564Z"
          fill="#1C1B1F"
        />
        <path
          d="m19.39 20.128-6.36-6.36-5.564 5.565 6.36 6.359 5.564-5.564Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m18.895 11.093 6.032-4.362 1.558 1.558-4.363 6.03-.946 4.229-9.735 9.735-6.342-6.62 9.596-9.597 4.2-.973Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

BeerBottlesvgFill.displayName = "BeerBottlesvgFill";

export default BeerBottlesvgFill;
