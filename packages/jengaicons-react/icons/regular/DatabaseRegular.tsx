import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DatabaseRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 16c6.075 0 11-2.686 11-6s-4.925-6-11-6S5 6.686 5 10s4.925 6 11 6Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 10v6c0 3.314 4.925 6 11 6s11-2.686 11-6v-6"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 16v6c0 3.314 4.925 6 11 6s11-2.686 11-6v-6"
        />
      </svg>
    );
  }
);

DatabaseRegular.displayName = "DatabaseRegular";

export default DatabaseRegular;
