import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FlameRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M25.6 18.9c0-8.64-9.6-14.4-9.6-14.4s-9.6 5.76-9.6 14.4a9.6 9.6 0 1 0 19.2 0Z"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11.2 23.7a4.8 4.8 0 1 0 9.6 0c0-4.8-4.8-7.68-4.8-7.68s-4.8 2.88-4.8 7.68Z"
      />
    </svg>
  );
});

FlameRegular.displayName = "FlameRegular";

export default FlameRegular;
