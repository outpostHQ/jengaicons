import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BirdRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        fill={color || "#000000"}
        d="M20.714 12.21a1.286 1.286 0 1 0 0-2.572 1.286 1.286 0 0 0 0 2.572Z"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m16 18.21-4.286 5.142M25.429 13.924v2.571a10.286 10.286 0 0 1-10.286 10.286H4l10.286-12.857V11.78a5.572 5.572 0 0 1 10.96-1.404L28 12.21l-2.571 1.714Z"
      />
    </svg>
  );
});

BirdRegular.displayName = "BirdRegular";

export default BirdRegular;
