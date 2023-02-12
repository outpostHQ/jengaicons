import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowCircleUpsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.96 16.283c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12 0-6.628 5.373-12 12-12 6.628 0 12 5.372 12 12Zm-7.05-.05a1 1 0 0 1-1.414 0l-2.536-2.536v7.586a1 1 0 1 1-2 0v-7.586l-2.535 2.536a1 1 0 0 1-1.415-1.415l4.238-4.237.06-.057a.998.998 0 0 1 1.364.057l4.238 4.238a1 1 0 0 1 0 1.414Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

ArrowCircleUpsvgFill.displayName = "ArrowCircleUpsvgFill";

export default ArrowCircleUpsvgFill;
