import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PersonSimpleRunRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M19.36 10.26a2.88 2.88 0 1 0 0-5.76 2.88 2.88 0 0 0 0 5.76ZM17.33 13.72c-.522 2.449-4.023 11.775-12.37 10.94"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14.398 20c2.139.456 7.842 2.26 7.842 8.5M7.76 12.15c1.843-.964 6.337-2.07 9.576 1.22 3.239 3.291 7.819 3.128 9.704 2.636"
        />
      </svg>
    );
  }
);

PersonSimpleRunRegular.displayName = "PersonSimpleRunRegular";

export default PersonSimpleRunRegular;
