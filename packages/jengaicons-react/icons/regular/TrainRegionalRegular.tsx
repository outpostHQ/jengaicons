import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TrainRegionalRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 24.308v-8.21M12.308 10.461h7.384M12.308 24.308 9.538 28M19.692 24.308 22.462 28"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="m26.154 14.154-3.23 10.154H9.076l-3.23-10.154L9.076 4h13.846l3.23 10.154Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m5.947 14.231 9.97 1.867L26.14 14.23"
        />
      </svg>
    );
  }
);

TrainRegionalRegular.displayName = "TrainRegionalRegular";

export default TrainRegionalRegular;
