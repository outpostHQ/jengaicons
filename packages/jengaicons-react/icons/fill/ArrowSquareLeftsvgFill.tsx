import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowSquareLeftsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M6.96 4.283a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-20a2 2 0 0 0-2-2h-20Zm4 12a.997.997 0 0 1 .298-.713l4.238-4.237a1 1 0 1 1 1.414 1.414l-2.536 2.536h7.586a1 1 0 1 1 0 2h-7.586l2.536 2.535a1 1 0 0 1-1.414 1.415l-4.243-4.243a.996.996 0 0 1-.293-.707Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

ArrowSquareLeftsvgFill.displayName = "ArrowSquareLeftsvgFill";

export default ArrowSquareLeftsvgFill;
