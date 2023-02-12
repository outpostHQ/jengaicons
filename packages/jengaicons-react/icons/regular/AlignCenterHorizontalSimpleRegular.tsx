import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const AlignCenterHorizontalSimpleRegular = forwardRef<
  SVGSVGElement,
  JengaIconProps
>((props, ref) => {
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
        d="M16 5.09v5.455M16 21.454v5.455"
      />
      <path
        stroke={color || "#000000"}
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 21.454V10.545h24v10.91z"
      />
    </svg>
  );
});

AlignCenterHorizontalSimpleRegular.displayName =
  "AlignCenterHorizontalSimpleRegular";

export default AlignCenterHorizontalSimpleRegular;
