import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BuildingsRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4 25.857h24M10 10.429h3.428M10 15.572h3.428M10 20.714h3.428M21.142 21.572h1.715M21.142 17.286h1.715"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5.714 6.18h12v19.677h-12zM17.714 13h8.572v12.857h-8.572z"
        />
      </svg>
    );
  }
);

BuildingsRegular.displayName = "BuildingsRegular";

export default BuildingsRegular;
