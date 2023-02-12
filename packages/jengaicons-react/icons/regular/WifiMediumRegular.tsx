import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const WifiMediumRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M11.911 16.94a5.92 5.92 0 0 1 8.178 0M7.954 12.983a11.514 11.514 0 0 1 16.092 0"
        />
        <path
          fill={color || "#000000"}
          d="M16 22.296a1.399 1.399 0 1 0 0-2.798 1.399 1.399 0 0 0 0 2.797Z"
        />
      </svg>
    );
  }
);

WifiMediumRegular.displayName = "WifiMediumRegular";

export default WifiMediumRegular;
