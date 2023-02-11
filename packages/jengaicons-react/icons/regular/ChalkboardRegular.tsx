import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ChalkboardRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4 24.143h24"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinejoin="round"
          d="M5.714 7.857h20.571v16.286H5.714z"
        />
        <path
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinejoin="round"
          d="M15.143 20.714h7.714v3.429h-7.714z"
        />
        <path
          d="M22.857 24.143H9.143V11.286h13.714v5.199"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

ChalkboardRegular.displayName = "ChalkboardRegular";

export default ChalkboardRegular;
