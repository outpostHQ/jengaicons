import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FlameFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M17.459 5.105c1.97 1.324 9.1 6.631 9.1 14.078a9.6 9.6 0 0 1-9.58 9.6 4.8 4.8 0 0 0 4.781-4.8c0-3.845-3.08-6.458-4.305-7.345a.834.834 0 0 0-.99 0c-1.225.887-4.305 3.5-4.305 7.345a4.8 4.8 0 0 0 4.781 4.8 9.6 9.6 0 0 1-9.581-9.6c0-7.447 7.131-12.754 9.101-14.078a.882.882 0 0 1 .998 0Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

FlameFill.displayName = "FlameFill";

export default FlameFill;
