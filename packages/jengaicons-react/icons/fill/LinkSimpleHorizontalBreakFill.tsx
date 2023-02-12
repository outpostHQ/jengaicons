import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const LinkSimpleHorizontalBreakFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M7.173 13.354a4.143 4.143 0 0 1 2.93-1.214h4.285a1 1 0 1 0 0-2h-4.285a6.143 6.143 0 0 0 0 12.286h4.285a1 1 0 1 0 0-2h-4.285a4.143 4.143 0 0 1-2.93-7.072Zm12.359-3.214a1 1 0 0 0 0 2h4.285a4.143 4.143 0 0 1 0 8.286h-4.285a1 1 0 0 0 0 2h4.285a6.143 6.143 0 0 0 0-12.286h-4.285Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

LinkSimpleHorizontalBreakFill.displayName = "LinkSimpleHorizontalBreakFill";

export default LinkSimpleHorizontalBreakFill;
