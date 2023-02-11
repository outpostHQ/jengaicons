import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TrashSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M10.96 4.783a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2h-10a1 1 0 0 1-1-1Zm-5 3h22a1 1 0 0 1 0 2h-2v19h-18v-19h-2a1 1 0 1 1 0-2Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

TrashSimpleFill.displayName = "TrashSimpleFill";

export default TrashSimpleFill;
