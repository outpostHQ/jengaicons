import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SidebarBrutalistFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11.96 6.283v20"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.96 6.283h24v20h-24z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6.283v20"
        />
        <path fill={color || "#000000"} d="M4.96 6.283H12v20H4.96z" />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M22.837 14.99V12.58a.5.5 0 0 0-.5-.5H16.38a.5.5 0 0 0-.5.5v5.977a.5.5 0 0 0 .5.5h2.253"
        />
        <rect
          width="6.957"
          height="6.977"
          x="18.666"
          y="14.864"
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          rx=".5"
        />
      </svg>
    );
  }
);

SidebarBrutalistFill.displayName = "SidebarBrutalistFill";

export default SidebarBrutalistFill;
