import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const HeartBreakRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M15.796 8.832A6.24 6.24 0 0 0 4 11.688c0 8.16 12 14.88 12 14.88s12-6.72 12-14.88a6.24 6.24 0 0 0-10.656-4.416l-3.84 3.84 3.84 3.84-1.92 1.92"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

HeartBreakRegular.displayName = "HeartBreakRegular";

export default HeartBreakRegular;
