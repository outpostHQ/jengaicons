import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DotsThreeCircleVerticalRegular = forwardRef<
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
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z"
      />
      <path
        fill={color || "#000000"}
        d="M16 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM16 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM16 23.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      />
    </svg>
  );
});

DotsThreeCircleVerticalRegular.displayName = "DotsThreeCircleVerticalRegular";

export default DotsThreeCircleVerticalRegular;
