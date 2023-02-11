import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ScalessvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.96 6.13v20.307M14.19 26.437h5.54M8.653 11.668l16.615-3.693"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.96 20.898c0 2.04 2.308 2.77 3.693 2.77 1.384 0 3.692-.73 3.692-2.77l-3.692-9.23-3.693 9.23ZM21.576 17.206c0 2.04 2.307 2.77 3.692 2.77 1.385 0 3.692-.73 3.692-2.77l-3.692-9.23-3.692 9.23Z"
          fill="#1C1B1F"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

ScalessvgFill.displayName = "ScalessvgFill";

export default ScalessvgFill;
