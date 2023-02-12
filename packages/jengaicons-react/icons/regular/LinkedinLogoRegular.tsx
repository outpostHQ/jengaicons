import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const LinkedinLogoRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M14.956 13.913v8.348M10.783 13.913v8.348M14.956 17.565a3.652 3.652 0 0 1 7.305 0v4.696"
        />
        <path
          fill={color || "#000000"}
          d="M10.783 11.304a1.565 1.565 0 1 0 0-3.13 1.565 1.565 0 0 0 0 3.13Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 4h24v24H4z"
        />
      </svg>
    );
  }
);

LinkedinLogoRegular.displayName = "LinkedinLogoRegular";

export default LinkedinLogoRegular;
