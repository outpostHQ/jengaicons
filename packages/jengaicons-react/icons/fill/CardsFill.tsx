import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CardsFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M8.96 5.283a1 1 0 1 0 0 2h19v15a1 1 0 1 0 2 0v-16a1 1 0 0 0-1-1h-20Zm-3 5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-14a1 1 0 0 0-1-1h-18Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

CardsFill.displayName = "CardsFill";

export default CardsFill;
