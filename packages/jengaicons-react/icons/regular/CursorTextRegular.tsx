import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CursorTextRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M13.044 15.956h6.021"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="M10.032 6H13a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-2.968M21.968 6H19a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h2.968"
        />
      </svg>
    );
  }
);

CursorTextRegular.displayName = "CursorTextRegular";

export default CursorTextRegular;
