import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const AlignBottomSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M13.16 4.283a1 1 0 0 0-1 1v18.16a1 1 0 0 0 1 1h7.6a1 1 0 0 0 1-1V5.283a1 1 0 0 0-1-1h-7.6Zm-4.84 23a1 1 0 1 0 0 2H25.6a1 1 0 0 0 0-2H8.32Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

AlignBottomSimpleFill.displayName = "AlignBottomSimpleFill";

export default AlignBottomSimpleFill;
