import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SparkleRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M20.889 4.5v5.333M23.556 7.167h-5.334M26.222 10.722v3.556M28 12.5h-3.555"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m13.778 8.944 2.64 7.137 7.138 2.641-7.137 2.641-2.641 7.137-2.641-7.137L4 18.723l7.137-2.642 2.64-7.137Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

SparkleRegular.displayName = "SparkleRegular";

export default SparkleRegular;
