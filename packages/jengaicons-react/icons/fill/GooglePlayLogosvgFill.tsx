import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const GooglePlayLogosvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size = 32 } = props;

    return (
      <svg
        style={{ width: size, height: size }}
        ref={ref}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        {...props}
      >
        <path
          d="m27.576 16.424-21.232-12v24l21.232-12Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M6.893 5.455 21.28 19.843M6.894 27.36 21.28 12.973"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.5 16.142 6 5.142v22.5l11.5-11.5Z"
          fill="#1C1B1F"
          stroke="#1C1B1F"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

GooglePlayLogosvgFill.displayName = "GooglePlayLogosvgFill";

export default GooglePlayLogosvgFill;
