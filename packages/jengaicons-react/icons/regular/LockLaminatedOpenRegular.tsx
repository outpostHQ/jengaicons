import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const LockLaminatedOpenRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M5 17.478h22M5 21.052h22M5 24.68h22"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.632 14.105h22.736V28H4.632V14.105Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="M9.684 14.105V9a5 5 0 0 1 5-5h2.632a5 5 0 0 1 5 5v.053"
        />
      </svg>
    );
  }
);

LockLaminatedOpenRegular.displayName = "LockLaminatedOpenRegular";

export default LockLaminatedOpenRegular;
