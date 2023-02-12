import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ResponsiveRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M15.467 22.743h12.535V4H9.092v12.498"
        />
        <rect
          width="11.43"
          height="11.463"
          x="3.998"
          y="16.537"
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          rx=".5"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17.166 8.36h6.616v6.615M15.404 16.737l8.377-8.377"
        />
      </svg>
    );
  }
);

ResponsiveRegular.displayName = "ResponsiveRegular";

export default ResponsiveRegular;
