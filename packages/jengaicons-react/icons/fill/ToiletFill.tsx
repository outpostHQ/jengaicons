import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ToiletFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M9.28 3.283a1 1 0 0 0-1 1v9.6H6.9a.5.5 0 0 0-.5.5v1.1a8.002 8.002 0 0 0 6.773 7.906l-.762 4.307a.5.5 0 0 0 .492.587h8.114a.5.5 0 0 0 .492-.587l-.762-4.306a8.002 8.002 0 0 0 6.773-7.907v-1.1a.5.5 0 0 0-.5-.5h-1.38v-9.6a1 1 0 0 0-1-1H9.28Zm14.36 10.6v-8.6H10.28v8.6h13.36Zm-10.52-6.76a1 1 0 1 0 0 2h1.92a1 1 0 1 0 0-2h-1.92Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

ToiletFill.displayName = "ToiletFill";

export default ToiletFill;
