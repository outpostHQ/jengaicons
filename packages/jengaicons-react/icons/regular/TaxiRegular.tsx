import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TaxiRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M4 16.475h24"
      />
      <path
        stroke={color || "#000000"}
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5.714 16.423h20.572v6.624H5.714v-6.624Z"
      />
      <path
        stroke={color || "#000000"}
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9.915 8.475h12.17l4.6 7.948H5.315l4.6-7.948ZM13.87 4.667h4.26l1.61 3.808h-7.48l1.61-3.808Z"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5.714 23.047v4.285h4.714v-4.285M21.571 23.047v4.285h4.715v-4.285M9 19.735h2M21 19.735h2"
      />
    </svg>
  );
});

TaxiRegular.displayName = "TaxiRegular";

export default TaxiRegular;
