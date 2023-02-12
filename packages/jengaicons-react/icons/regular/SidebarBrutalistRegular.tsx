import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SidebarBrutalistRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M11 6.5v20"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6.5h24v20H4z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21.837 14.99V12.58a.5.5 0 0 0-.5-.5H15.38a.5.5 0 0 0-.5.5v5.977a.5.5 0 0 0 .5.5h2.253"
        />
        <rect
          width="6.957"
          height="6.977"
          x="17.666"
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

SidebarBrutalistRegular.displayName = "SidebarBrutalistRegular";

export default SidebarBrutalistRegular;
