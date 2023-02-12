import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const AlignLeftSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fill={color || "#000000"}
          fillRule="evenodd"
          d="M5.96 24.923a1 1 0 1 1-2 0V7.643a1 1 0 0 1 2 0v17.28Zm23-4.84a1 1 0 0 1-1 1H9.8a1 1 0 0 1-1-1v-7.6a1 1 0 0 1 1-1h18.16a1 1 0 0 1 1 1v7.6Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

AlignLeftSimpleFill.displayName = "AlignLeftSimpleFill";

export default AlignLeftSimpleFill;
