import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SketchLogoRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4.26 12.962h23.432"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="m10.895 12.697 4.617-6.05a.5.5 0 0 1 .793-.001l4.657 6.05a.5.5 0 0 1 .066.495l-4.656 11.342a.5.5 0 0 1-.926 0L10.83 13.188a.5.5 0 0 1 .066-.492Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="M22.006 6.194H9.95a.5.5 0 0 0-.381.177l-5.28 6.236a.5.5 0 0 0 .018.666L15.833 25.48a.5.5 0 0 0 .733-.007l11.136-12.199a.5.5 0 0 0 .011-.662L22.386 6.37a.5.5 0 0 0-.38-.175Z"
        />
      </svg>
    );
  }
);

SketchLogoRegular.displayName = "SketchLogoRegular";

export default SketchLogoRegular;
