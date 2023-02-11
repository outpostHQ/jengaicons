import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const RulerRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="m16.494 8.208 3.702 3.702M12.33 12.373l3.702 3.702M8.165 16.537l3.702 3.702"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m20.6 4 7.4 7.4L11.4 28 4 20.6 20.6 4Z"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
});

RulerRegular.displayName = "RulerRegular";

export default RulerRegular;
