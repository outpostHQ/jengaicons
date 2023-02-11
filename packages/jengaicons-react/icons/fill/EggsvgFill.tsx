import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const EggsvgFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
  const { size = 32 } = props;

  return (
    <svg
      style={{ width: size, height: size }}
      ref={ref}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        d="M26.191 19.052a9.23 9.23 0 0 1-18.462 0c0-7.384 5.539-14.769 9.231-14.769 3.693 0 9.231 7.385 9.231 14.77Z"
        fill="#1C1B1F"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

EggsvgFill.displayName = "EggsvgFill";

export default EggsvgFill;
