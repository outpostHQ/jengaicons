import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const LockRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16 22.552a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      />
      <path
        stroke={color || "#000000"}
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4.632 14.105h22.736V28H4.632V14.105Z"
      />
      <path
        stroke={color || "#000000"}
        strokeWidth="2"
        d="M9.684 9a5 5 0 0 1 5-5h2.632a5 5 0 0 1 5 5v4.605a.5.5 0 0 1-.5.5H10.184a.5.5 0 0 1-.5-.5V9Z"
      />
    </svg>
  );
});

LockRegular.displayName = "LockRegular";

export default LockRegular;
