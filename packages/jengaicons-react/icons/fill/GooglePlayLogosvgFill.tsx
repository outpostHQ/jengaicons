import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const GooglePlayLogosvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m27.576 16.424-21.232-12v24l21.232-12Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6.893 5.455 21.28 19.843M6.894 27.36 21.28 12.973"
        />
        <path
          fill={color || "#000000"}
          stroke={color || "#000000"}
          strokeLinejoin="round"
          d="M17.5 16.142 6 5.142v22.5l11.5-11.5Z"
        />
      </svg>
    );
  }
);

GooglePlayLogosvgFill.displayName = "GooglePlayLogosvgFill";

export default GooglePlayLogosvgFill;
