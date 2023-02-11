import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const LockSimpleRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4.632 14.105h22.736V28H4.632V14.105Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M9.684 9a5 5 0 0 1 5-5h2.632a5 5 0 0 1 5 5v4.605a.5.5 0 0 1-.5.5H10.184a.5.5 0 0 1-.5-.5V9Z"
          stroke="#1C1B1F"
          strokeWidth="2"
        />
      </svg>
    );
  }
);

LockSimpleRegular.displayName = "LockSimpleRegular";

export default LockSimpleRegular;
