import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ResponsiveFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
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
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10.051 4.283h18.911v18.743H10.051z"
        />
        <rect
          width="11.43"
          height="11.463"
          x="4.958"
          y="16.82"
          fill={color || "#000000"}
          rx=".5"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M18.127 8.643h6.615v6.615M7.101 26.283l17.64-17.64"
        />
      </svg>
    );
  }
);

ResponsiveFill.displayName = "ResponsiveFill";

export default ResponsiveFill;
