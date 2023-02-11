import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DiamondsFourRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinejoin="round"
          d="M11.353 8.605 15.958 4l4.605 4.605-4.605 4.605zM11.353 23.395l4.604-4.605 4.605 4.605L15.957 28zM18.79 16.036l4.605-4.605L28 16.036l-4.605 4.605zM4 16.036l4.604-4.605 4.605 4.605-4.605 4.605z"
        />
      </svg>
    );
  }
);

DiamondsFourRegular.displayName = "DiamondsFourRegular";

export default DiamondsFourRegular;
