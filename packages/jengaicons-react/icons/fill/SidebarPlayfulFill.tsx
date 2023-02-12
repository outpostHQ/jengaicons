import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SidebarPlayfulFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
        <rect
          width="5.165"
          height="5.165"
          x="15.683"
          y="14.724"
          fill={color || "#000000"}
          rx=".5"
          transform="rotate(-60 15.683 14.724)"
        />
        <path
          fill={color || "#000000"}
          d="M23.948 19.191a.5.5 0 0 1 .837-.224l4.845 4.846a.5.5 0 0 1-.224.837l-6.62 1.773a.5.5 0 0 1-.612-.612l1.774-6.62Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M28.96 19.073V6.283h-24v20h15.17M12 6.5v19.784"
        />
        <path fill={color || "#000000"} d="M4.96 6.392H12v20H4.96z" />
      </svg>
    );
  }
);

SidebarPlayfulFill.displayName = "SidebarPlayfulFill";

export default SidebarPlayfulFill;
