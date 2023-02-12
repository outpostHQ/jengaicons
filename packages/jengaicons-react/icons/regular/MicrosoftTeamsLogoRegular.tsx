import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MicrosoftTeamsLogoRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M13.84 13.601H9.52M11.68 19.36v-5.759M13.636 9.761a3.84 3.84 0 1 1 5.244 1.404"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M20.572 6.546a3.12 3.12 0 1 1-.408 3.407"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.481 9.761H18.88V23.2H4.481z"
        />
        <path
          stroke={color || "#000000"}
          strokeWidth="2"
          d="M10.517 22.72a5.28 5.28 0 0 0 5.28 5.28h1.02a6.301 6.301 0 0 0 6.302-6.301v-9.937a.081.081 0 0 0-.081-.08h-4.141"
        />
        <path
          stroke={color || "#000000"}
          strokeWidth="2"
          d="M18.88 11.681h8.582c.032 0 .057.026.057.058v7.142a4.32 4.32 0 0 1-4.32 4.32"
        />
      </svg>
    );
  }
);

MicrosoftTeamsLogoRegular.displayName = "MicrosoftTeamsLogoRegular";

export default MicrosoftTeamsLogoRegular;
