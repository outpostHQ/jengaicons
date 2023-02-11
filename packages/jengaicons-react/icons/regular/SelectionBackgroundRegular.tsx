import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SelectionBackgroundRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 10.545h17.454v17.454H4z"
        />
        <path
          d="M10.545 10.573V4H28v17.454h-6.548"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke-dasharray="4 4"
        />
      </svg>
    );
  }
);

SelectionBackgroundRegular.displayName = "SelectionBackgroundRegular";

export default SelectionBackgroundRegular;
