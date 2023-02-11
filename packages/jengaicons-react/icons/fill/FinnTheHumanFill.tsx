import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FinnTheHumanFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.46 6.59a.5.5 0 0 1 .5.5v8.885c0 5.523-4.477 10-10 10h-4c-5.523 0-10-4.477-10-10V7.091a.5.5 0 0 1 .5-.5h4.492a.5.5 0 0 1 .5.5v1.814a.5.5 0 0 0 .5.5h11.946a.5.5 0 0 0 .5-.5V7.091a.5.5 0 0 1 .5-.5h4.562Zm-15.654 5.924a5.154 5.154 0 0 0 0 10.308h8.308a5.154 5.154 0 1 0 0-10.308h-8.308Zm-3.154 5.154a3.154 3.154 0 0 1 3.154-3.154h8.308a3.154 3.154 0 0 1 0 6.308h-8.308a3.154 3.154 0 0 1-3.154-3.154Zm4.539 0a1.385 1.385 0 1 1-2.77 0 1.385 1.385 0 0 1 2.77 0Zm6.923 1.384a1.385 1.385 0 1 0 0-2.769 1.385 1.385 0 0 0 0 2.77Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

FinnTheHumanFill.displayName = "FinnTheHumanFill";

export default FinnTheHumanFill;
