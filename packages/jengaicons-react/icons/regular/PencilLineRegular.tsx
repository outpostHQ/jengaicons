import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PencilLineRegular = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size, color } = props;

    return (
      <svg
        style={{ width: size || 32, height: size || 32 }}
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
        {...props}
      >
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="M13.621 24.524h13.805"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21.507 3.841 28 10.335 13.827 24.508l-6.493-6.493L21.507 3.84Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m7.347 18.073-.42 6.288 6.852.169"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="m18.168 7.207 6.474 6.474"
        />
      </svg>
    );
  }
);

PencilLineRegular.displayName = "PencilLineRegular";

export default PencilLineRegular;
