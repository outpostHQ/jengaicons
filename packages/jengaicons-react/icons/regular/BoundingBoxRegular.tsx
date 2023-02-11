import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BoundingBoxRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M7.273 21.455v-10.91M21.454 24.727H10.545M24.727 10.546v10.909M10.545 7.273h10.91"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinejoin="round"
          d="M4 4h6.545v6.545H4zM4 21.454h6.545v6.545H4zM21.455 4H28v6.545h-6.545zM21.455 21.454H28v6.545h-6.545z"
        />
      </svg>
    );
  }
);

BoundingBoxRegular.displayName = "BoundingBoxRegular";

export default BoundingBoxRegular;
