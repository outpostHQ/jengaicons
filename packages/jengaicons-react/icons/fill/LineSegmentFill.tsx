import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const LineSegmentFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M25.687 10.828a3.273 3.273 0 1 0-2.905-1.765c-.04.03-.08.063-.116.1L9.84 21.989c-.037.037-.07.075-.1.116a3.273 3.273 0 1 0 1.398 1.398c.04-.03.08-.063.116-.1L24.08 10.577a1.01 1.01 0 0 0 .1-.116c.45.235.964.367 1.507.367Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

LineSegmentFill.displayName = "LineSegmentFill";

export default LineSegmentFill;
