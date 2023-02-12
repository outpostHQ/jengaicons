import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TruckRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M4 16.429h17.143M21.143 13.854H28"
      />
      <path
        stroke={color || "#000000"}
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M22.429 24.143a2.571 2.571 0 1 0 0-5.143 2.571 2.571 0 0 0 0 5.143ZM9.571 24.143a2.571 2.571 0 1 0 0-5.143 2.571 2.571 0 0 0 0 5.143Z"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19.857 21.571h-7.714"
      />
      <path
        stroke={color || "#000000"}
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7.02 21.572H4V7.857h17.143v11.44m-8.95 2.274h7.667M21.143 19.298V9.57h5.143L28 13.823v7.748h-3.429"
      />
    </svg>
  );
});

TruckRegular.displayName = "TruckRegular";

export default TruckRegular;
