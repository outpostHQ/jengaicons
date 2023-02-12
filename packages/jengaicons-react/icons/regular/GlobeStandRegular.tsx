import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const GlobeStandRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M17.572 20.82a8.41 8.41 0 1 0 0-16.82 8.41 8.41 0 0 0 0 16.82ZM13.623 28H21.1M17.361 24.262V28"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M25.493 21.196A11.613 11.613 0 0 1 9.085 4.788"
        />
      </svg>
    );
  }
);

GlobeStandRegular.displayName = "GlobeStandRegular";

export default GlobeStandRegular;
