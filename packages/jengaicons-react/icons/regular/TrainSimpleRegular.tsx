import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TrainSimpleRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M6.308 15.077h19.384M12.308 24.308 9.538 28M19.692 24.308 22.462 28"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.923 21.538a1.385 1.385 0 1 0 0-2.769 1.385 1.385 0 0 0 0 2.77ZM21.077 21.538a1.385 1.385 0 1 0 0-2.769 1.385 1.385 0 0 0 0 2.77Z"
          fill="#1C1B1F"
        />
        <path
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinejoin="round"
          d="M6.308 4h19.385v20.308H6.308z"
        />
      </svg>
    );
  }
);

TrainSimpleRegular.displayName = "TrainSimpleRegular";

export default TrainSimpleRegular;
