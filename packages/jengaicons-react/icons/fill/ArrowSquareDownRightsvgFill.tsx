import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowSquareDownRightsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M6.96 4.283a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-20a2 2 0 0 0-2-2h-20Zm14.243 16.243a.996.996 0 0 1-.715.292h-5.993a1 1 0 1 1 0-2h3.586l-5.364-5.364a1 1 0 0 1 1.414-1.414l5.364 5.364v-3.586a1 1 0 0 1 2 0v6a.997.997 0 0 1-.293.708Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

ArrowSquareDownRightsvgFill.displayName = "ArrowSquareDownRightsvgFill";

export default ArrowSquareDownRightsvgFill;
