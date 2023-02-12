import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SunDimvRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 23.7a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4ZM16 5.46V4.5M8.188 8.688l-.672-.672M4.96 16.5H4M8.188 24.312l-.672.672M16 27.54v.96M23.812 24.312l.672.672M27.04 16.5H28M23.812 8.688l.672-.672"
        />
      </svg>
    );
  }
);

SunDimvRegular.displayName = "SunDimvRegular";

export default SunDimvRegular;
