import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BriefcaseRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28 15.789A23.89 23.89 0 0 1 16 19a23.89 23.89 0 0 1-12-3.21M14.499 15h3"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 9h24v18H4V9ZM10.999 5h10v4h-10V5Z"
        />
      </svg>
    );
  }
);

BriefcaseRegular.displayName = "BriefcaseRegular";

export default BriefcaseRegular;
