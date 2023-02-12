import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowSquareUpsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M6.96 4.283a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-20a2 2 0 0 0-2-2h-20Zm10 6a.997.997 0 0 1 .713.298l4.237 4.237a1 1 0 0 1-1.414 1.415l-2.536-2.536v7.586a1 1 0 1 1-2 0v-7.586l-2.535 2.536a1 1 0 1 1-1.415-1.415l4.243-4.242a.997.997 0 0 1 .707-.293Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

ArrowSquareUpsvgFill.displayName = "ArrowSquareUpsvgFill";

export default ArrowSquareUpsvgFill;
