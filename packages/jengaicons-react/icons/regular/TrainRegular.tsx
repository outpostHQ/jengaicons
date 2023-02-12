import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TrainRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M6.308 15.077h19.384M6.308 8.615h19.384M12.308 24.308 9.538 28M19.692 24.308 22.462 28"
      />
      <path
        fill={color || "#000000"}
        d="M10.923 21.538a1.385 1.385 0 1 0 0-2.769 1.385 1.385 0 0 0 0 2.77ZM21.077 21.538a1.385 1.385 0 1 0 0-2.769 1.385 1.385 0 0 0 0 2.77Z"
      />
      <path
        stroke={color || "#000000"}
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6.308 4h19.385v20.308H6.308z"
      />
    </svg>
  );
});

TrainRegular.displayName = "TrainRegular";

export default TrainRegular;
