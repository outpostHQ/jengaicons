import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ChevronCircleDoubleRightsvgFill = forwardRef<
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
        fill={color || "#000000"}
        fillRule="evenodd"
        d="M16.96 28.283c6.628 0 12-5.373 12-12s-5.372-12-12-12c-6.627 0-12 5.373-12 12s5.373 12 12 12Zm-5.828-16.95a1 1 0 0 1 1.414 0l4.243 4.243a1 1 0 0 1 0 1.414l-4.243 4.243a1 1 0 0 1-1.414-1.415l3.535-3.535-3.535-3.536a1 1 0 0 1 0-1.414Zm7.414 0a1 1 0 0 0-1.414 1.414l3.535 3.536-3.535 3.535a1 1 0 1 0 1.414 1.415l4.243-4.243a1 1 0 0 0 0-1.414l-4.243-4.243Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

ChevronCircleDoubleRightsvgFill.displayName = "ChevronCircleDoubleRightsvgFill";

export default ChevronCircleDoubleRightsvgFill;
