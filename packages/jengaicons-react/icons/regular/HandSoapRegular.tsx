import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const HandSoapRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 4v4.764"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.382 13.573h19.236V28H6.382V13.573ZM21.77 13.573v-4.81H10.23v4.81"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M13.223 4h9.448v2.37"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

HandSoapRegular.displayName = "HandSoapRegular";

export default HandSoapRegular;
