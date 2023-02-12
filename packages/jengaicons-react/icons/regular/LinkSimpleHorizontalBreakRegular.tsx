import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const LinkSimpleHorizontalBreakRegular = forwardRef<
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
        d="M13.428 21.143H9.143a5.143 5.143 0 1 1 0-10.286h4.285M18.572 21.143h4.285a5.142 5.142 0 1 0 0-10.286h-4.285"
      />
    </svg>
  );
});

LinkSimpleHorizontalBreakRegular.displayName =
  "LinkSimpleHorizontalBreakRegular";

export default LinkSimpleHorizontalBreakRegular;
