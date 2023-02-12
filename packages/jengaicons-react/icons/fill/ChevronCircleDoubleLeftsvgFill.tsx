import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ChevronCircleDoubleLeftsvgFill = forwardRef<
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
        d="M16.96 28.283c6.628 0 12-5.373 12-12s-5.372-12-12-12c-6.627 0-12 5.373-12 12s5.373 12 12 12Zm-.171-16.95a1 1 0 0 1 0 1.414l-3.536 3.536 3.536 3.535a1 1 0 0 1-1.415 1.415l-4.242-4.243a1 1 0 0 1 0-1.414l4.242-4.243a1 1 0 0 1 1.415 0Zm6 1.414a1 1 0 0 0-1.415-1.414l-4.242 4.243a1 1 0 0 0 0 1.414l4.242 4.243a1 1 0 0 0 1.415-1.415l-3.536-3.535 3.536-3.536Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

ChevronCircleDoubleLeftsvgFill.displayName = "ChevronCircleDoubleLeftsvgFill";

export default ChevronCircleDoubleLeftsvgFill;
