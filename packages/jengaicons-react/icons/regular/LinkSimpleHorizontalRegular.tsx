import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const LinkSimpleHorizontalRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M10.858 16h10.285M13.428 21.143H9.143a5.143 5.143 0 1 1 0-10.286h4.285M18.572 21.143h4.285a5.142 5.142 0 1 0 0-10.286h-4.285"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

LinkSimpleHorizontalRegular.displayName = "LinkSimpleHorizontalRegular";

export default LinkSimpleHorizontalRegular;
