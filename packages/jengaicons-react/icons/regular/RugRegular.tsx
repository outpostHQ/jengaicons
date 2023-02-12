import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const RugRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M7.692 6.77V4M13.231 6.77V4M24.308 6.77V4M7.692 28v-2.77M13.231 28v-2.77M18.77 6.77V4M18.77 28v-2.77M24.308 28v-2.77"
      />
      <rect
        width="16.615"
        height="18.462"
        x="7.692"
        y="6.769"
        stroke={color || "#000000"}
        strokeWidth="2"
        rx=".5"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m13.197 15.65 2.596-4.183a.1.1 0 0 1 .168-.004l2.837 4.183a.1.1 0 0 1 .003.108l-2.837 4.76a.1.1 0 0 1-.174-.004l-2.596-4.76a.1.1 0 0 1 .003-.1Z"
      />
    </svg>
  );
});

RugRegular.displayName = "RugRegular";

export default RugRegular;
