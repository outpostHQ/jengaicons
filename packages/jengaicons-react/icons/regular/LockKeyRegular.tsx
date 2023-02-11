import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const LockKeyRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 21.937a2.212 2.212 0 1 0 0-4.423 2.212 2.212 0 0 0 0 4.423ZM16 21.937v2.654"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
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

LockKeyRegular.displayName = "LockKeyRegular";

export default LockKeyRegular;
