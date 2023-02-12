import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const HouseLineRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4 25.857h24M6.14 14.703l9.744-8.56 9.976 8.56v11.154h-7.076v-6.67h-5.723v6.67H6.14V14.703Z"
        />
      </svg>
    );
  }
);

HouseLineRegular.displayName = "HouseLineRegular";

export default HouseLineRegular;
