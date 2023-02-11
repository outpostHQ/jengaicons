import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DropHalfBottomRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M25.23 18.77C25.23 10.46 16 4 16 4s-9.23 6.461-9.23 14.77a9.23 9.23 0 1 0 18.46 0ZM6.92 16.923H25.08M6.954 20.615h18.092M8.615 24.308h14.77"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

DropHalfBottomRegular.displayName = "DropHalfBottomRegular";

export default DropHalfBottomRegular;
