import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const GoogleChromeLogosvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.96 28.424c6.627 0 12-5.372 12-12 0-6.627-5.373-12-12-12-6.628 0-12 5.373-12 12 0 6.628 5.372 12 12 12Z"
        />
        <path
          fill={color || "#000000"}
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16.96 20.924a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16.96 11.924h11.125M13.06 18.674 7.498 9.037M20.86 18.674l-5.563 9.638"
        />
      </svg>
    );
  }
);

GoogleChromeLogosvgFill.displayName = "GoogleChromeLogosvgFill";

export default GoogleChromeLogosvgFill;
