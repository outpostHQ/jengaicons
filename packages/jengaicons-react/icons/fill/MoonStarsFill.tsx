import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MoonStarsFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M20.486 4.254a1 1 0 0 1 1 1v.883h.883a1 1 0 1 1 0 2h-.883v.883a1 1 0 0 1-2 0v-.883h-.883a1 1 0 1 1 0-2h.883v-.883a1 1 0 0 1 1-1Zm1.825 8.532a1 1 0 0 1 1-1h5.649a1 1 0 0 1 0 2h-5.649a1 1 0 0 1-1-1Zm3.043 7.807c.383-.074.726.274.591.64A10.827 10.827 0 1 1 12.04 7.327c.365-.135.714.209.64.591a10.816 10.816 0 0 0 12.674 12.675Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

MoonStarsFill.displayName = "MoonStarsFill";

export default MoonStarsFill;
