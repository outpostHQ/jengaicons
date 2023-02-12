import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BugRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M18.897 13.517a1.241 1.241 0 1 0 0-2.482 1.241 1.241 0 0 0 0 2.482ZM13.103 13.517a1.241 1.241 0 1 0 0-2.483 1.241 1.241 0 0 0 0 2.483Z"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 16v9.931M28 16H4"
      />
      <rect
        width="16.053"
        height="19.862"
        x="7.724"
        y="6.069"
        stroke={color || "#000000"}
        strokeWidth="2"
        rx="8.027"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m26.75 22.207-2.973-1.717M26.75 9.793l-2.973 1.717M5.25 9.793l2.741 1.583M5.25 22.207l2.53-1.461"
      />
    </svg>
  );
});

BugRegular.displayName = "BugRegular";

export default BugRegular;
