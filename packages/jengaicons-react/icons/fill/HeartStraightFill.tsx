import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const HeartStraightFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m17.653 26.095 9.38-9.38c2.304-2.304 2.644-6.096.463-8.518a6.02 6.02 0 0 0-8.735-.235l-1.763 1.763-1.522-1.522C13.171 5.9 9.38 5.56 6.958 7.74a6.02 6.02 0 0 0-.235 8.735l9.62 9.62a.926.926 0 0 0 1.31 0Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

HeartStraightFill.displayName = "HeartStraightFill";

export default HeartStraightFill;
