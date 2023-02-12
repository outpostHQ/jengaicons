import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const EggsvgFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M26.191 19.052a9.23 9.23 0 0 1-18.462 0c0-7.384 5.539-14.769 9.231-14.769 3.693 0 9.231 7.385 9.231 14.77Z"
      />
    </svg>
  );
});

EggsvgFill.displayName = "EggsvgFill";

export default EggsvgFill;
