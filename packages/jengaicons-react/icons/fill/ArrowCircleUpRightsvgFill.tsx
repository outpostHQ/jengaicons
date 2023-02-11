import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowCircleUpRightsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M28.96 16.283c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12 0-6.628 5.373-12 12-12 6.628 0 12 5.372 12 12Zm-8.464 3.464a1 1 0 0 1-1-1v-3.585l-5.364 5.364a1 1 0 1 1-1.415-1.415l5.364-5.364h-3.585a1 1 0 1 1 0-2h5.992a.971.971 0 0 1 .348.06.996.996 0 0 1 .66.947v5.993a1 1 0 0 1-1 1Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

ArrowCircleUpRightsvgFill.displayName = "ArrowCircleUpRightsvgFill";

export default ArrowCircleUpRightsvgFill;
