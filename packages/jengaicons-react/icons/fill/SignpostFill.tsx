import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SignpostFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16 3.283a1 1 0 0 1 1 1v4.923h7.962a1 1 0 0 1 .743.33l3.676 4.077a1 1 0 0 1 0 1.34l-3.676 4.076a1 1 0 0 1-.743.33H17v8.924a1 1 0 1 1-2 0V19.36H4.96a1 1 0 0 1-1-1v-8.154a1 1 0 0 1 1-1H15V4.283a1 1 0 0 1 1-1Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

SignpostFill.displayName = "SignpostFill";

export default SignpostFill;
