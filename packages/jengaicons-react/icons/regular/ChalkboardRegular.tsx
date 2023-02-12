import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ChalkboardRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4 24.143h24"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5.714 7.857h20.571v16.286H5.714z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15.143 20.714h7.714v3.429h-7.714z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M22.857 24.143H9.143V11.286h13.714v5.199"
        />
      </svg>
    );
  }
);

ChalkboardRegular.displayName = "ChalkboardRegular";

export default ChalkboardRegular;
