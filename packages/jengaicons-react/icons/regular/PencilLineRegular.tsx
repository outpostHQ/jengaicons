import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PencilLineRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M13.621 24.524h13.805"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M21.507 3.841 28 10.335 13.827 24.508l-6.493-6.493L21.507 3.84Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="m7.347 18.073-.42 6.288 6.852.169"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m18.168 7.207 6.474 6.474"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

PencilLineRegular.displayName = "PencilLineRegular";

export default PencilLineRegular;
