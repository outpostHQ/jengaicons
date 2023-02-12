import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowCircleRightsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m17.718 12.04 4.242 4.243-4.242 4.242M21.96 16.28h-10"
        />
        <path
          fill={color || "#000000"}
          fillRule="evenodd"
          d="M28.96 16.283c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12 0-6.628 5.373-12 12-12 6.628 0 12 5.372 12 12Zm-11.95-4.95a1 1 0 0 0 0 1.414l2.536 2.536H11.96a1 1 0 1 0 0 2h7.586l-2.536 2.535a1 1 0 0 0 1.415 1.415l4.237-4.238.057-.06a.998.998 0 0 0-.056-1.364l-4.238-4.238a1 1 0 0 0-1.415 0Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

ArrowCircleRightsvgFill.displayName = "ArrowCircleRightsvgFill";

export default ArrowCircleRightsvgFill;
