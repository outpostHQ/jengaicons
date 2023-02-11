import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowsOutLineVerticalRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M26 16H6M16 4.515v8M11.757 8.757 16 4.515l4.243 4.242M11.757 23.243 16 27.485l4.243-4.242M16 19.485v8"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

ArrowsOutLineVerticalRegular.displayName = "ArrowsOutLineVerticalRegular";

export default ArrowsOutLineVerticalRegular;
