import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DiceOneFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M28.96 5.283a1 1 0 0 0-1-1h-22a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-22Zm-10.5 11a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

DiceOneFill.displayName = "DiceOneFill";

export default DiceOneFill;
