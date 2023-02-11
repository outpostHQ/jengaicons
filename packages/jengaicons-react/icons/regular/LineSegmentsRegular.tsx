import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const LineSegmentsRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M6.571 26.286a2.571 2.571 0 1 0 0-5.143 2.571 2.571 0 0 0 0 5.143ZM12.571 15.143a2.571 2.571 0 1 0 0-5.143 2.571 2.571 0 0 0 0 5.143ZM19.429 22a2.571 2.571 0 1 0 0-5.143 2.571 2.571 0 0 0 0 5.143ZM25.429 10.857a2.571 2.571 0 1 0 0-5.143 2.571 2.571 0 0 0 0 5.143ZM11.352 14.836 7.791 21.45M17.61 17.61l-3.22-3.22M24.21 10.55l-3.562 6.614"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

LineSegmentsRegular.displayName = "LineSegmentsRegular";

export default LineSegmentsRegular;
