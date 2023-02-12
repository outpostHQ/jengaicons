import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SkipBackFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M8.46 5.783a1 1 0 1 0-2 0v22a1 1 0 0 0 2 0V17.414l17.232 10.883a.5.5 0 0 0 .767-.423V5.691a.5.5 0 0 0-.767-.422L8.461 16.15V5.783Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

SkipBackFill.displayName = "SkipBackFill";

export default SkipBackFill;
