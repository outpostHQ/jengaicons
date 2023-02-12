import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const GitlabLogosvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m27.5 13.142 1.462 5.454-11.786 8.455-12.299-8.455L6.5 13.142"
        />
        <path
          fill={color || "#000000"}
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 13.142H6.5l2-7 3.5 7ZM22 13.142h5.5l-2-7-3.5 7Z"
        />
        <path
          fill={color || "#000000"}
          stroke={color || "#000000"}
          strokeLinejoin="round"
          d="M22 13.142H12l5 14 5-14Z"
        />
      </svg>
    );
  }
);

GitlabLogosvgFill.displayName = "GitlabLogosvgFill";

export default GitlabLogosvgFill;
