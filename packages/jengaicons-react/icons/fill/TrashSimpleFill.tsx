import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TrashSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M10.96 4.783a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2h-10a1 1 0 0 1-1-1Zm-5 3h22a1 1 0 0 1 0 2h-2v19h-18v-19h-2a1 1 0 1 1 0-2Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

TrashSimpleFill.displayName = "TrashSimpleFill";

export default TrashSimpleFill;
