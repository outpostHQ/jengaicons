import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const AlignCenterHorizontalSimpleFill = forwardRef<
  SVGSVGElement,
  JengaIconProps
>((props, ref) => {
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
        d="M16.96 4.374a1 1 0 0 1 1 1v5.454h10a1 1 0 0 1 1 1v8.91a1 1 0 0 1-1 1h-10v5.454a1 1 0 0 1-2 0v-5.455h-10a1 1 0 0 1-1-1v-8.909a1 1 0 0 1 1-1h10V5.374a1 1 0 0 1 1-1Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

AlignCenterHorizontalSimpleFill.displayName = "AlignCenterHorizontalSimpleFill";

export default AlignCenterHorizontalSimpleFill;
