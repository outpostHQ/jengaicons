import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const RowsFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M5.96 6.465a1 1 0 0 0-1 1V13.1a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V7.465a1 1 0 0 0-1-1h-22Zm0 12a1 1 0 0 0-1 1V25.1a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-5.636a1 1 0 0 0-1-1h-22Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

RowsFill.displayName = "RowsFill";

export default RowsFill;
