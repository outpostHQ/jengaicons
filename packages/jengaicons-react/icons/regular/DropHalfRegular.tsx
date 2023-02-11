import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DropHalfRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M25.23 18.77C25.23 10.46 16 4 16 4s-9.23 6.461-9.23 14.77a9.23 9.23 0 1 0 18.46 0ZM16 28V4M16 9.538l9.23 9.231M16 15.077l8.108 8.108M16 20.615l5.539 5.54"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

DropHalfRegular.displayName = "DropHalfRegular";

export default DropHalfRegular;
