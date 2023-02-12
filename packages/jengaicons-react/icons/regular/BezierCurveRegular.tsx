import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BezierCurveRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4 10.857h9.429M18.572 10.857H28M16 13.428a2.571 2.571 0 1 0 0-5.142 2.571 2.571 0 0 0 0 5.143ZM6.571 23.714a2.571 2.571 0 1 0 0-5.143 2.571 2.571 0 0 0 0 5.143ZM25.429 23.714a2.571 2.571 0 1 0 0-5.143 2.571 2.571 0 0 0 0 5.143Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M18.55 11.21a9.438 9.438 0 0 1 6.729 7.361M6.721 18.571a9.44 9.44 0 0 1 6.729-7.36"
        />
      </svg>
    );
  }
);

BezierCurveRegular.displayName = "BezierCurveRegular";

export default BezierCurveRegular;
