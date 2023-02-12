import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CardsFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        fillRule="evenodd"
        d="M8.96 5.283a1 1 0 1 0 0 2h19v15a1 1 0 1 0 2 0v-16a1 1 0 0 0-1-1h-20Zm-3 5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-14a1 1 0 0 0-1-1h-18Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

CardsFill.displayName = "CardsFill";

export default CardsFill;
