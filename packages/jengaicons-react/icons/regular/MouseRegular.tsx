import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MouseRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7.814 14h16.372M16 10.672V7.328"
      />
      <path
        stroke={color || "#000000"}
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7.814 12a8 8 0 0 1 8-8h.372a8 8 0 0 1 8 8v8a8 8 0 0 1-8 8h-.372a8 8 0 0 1-8-8v-8Z"
      />
    </svg>
  );
});

MouseRegular.displayName = "MouseRegular";

export default MouseRegular;
