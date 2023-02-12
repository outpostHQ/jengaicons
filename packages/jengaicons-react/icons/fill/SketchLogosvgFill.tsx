import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SketchLogosvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M5.22 13.386h23.433"
        />
        <path
          fill={color || "#000000"}
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="m11.855 13.121 4.617-6.05a.5.5 0 0 1 .794 0l4.656 6.05a.5.5 0 0 1 .067.494l-4.657 11.343a.5.5 0 0 1-.925-.002L11.79 13.613a.5.5 0 0 1 .065-.492Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="M22.966 6.618H10.91a.5.5 0 0 0-.382.177l-5.28 6.236a.5.5 0 0 0 .018.667l11.526 12.206a.5.5 0 0 0 .733-.006l11.137-12.2a.5.5 0 0 0 .01-.661l-5.327-6.243a.5.5 0 0 0-.38-.176Z"
        />
      </svg>
    );
  }
);

SketchLogosvgFill.displayName = "SketchLogosvgFill";

export default SketchLogosvgFill;
