import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ChartPieSliceFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M13.947 4.97a1 1 0 0 0-1.338-.94C7.564 5.841 3.96 10.714 3.96 16.431c0 .752.062 1.49.183 2.21a1 1 0 0 0 1.485.701l7.818-4.503a1 1 0 0 0 .501-.867V4.97ZM5.96 16.432c0-4.335 2.436-8.087 5.987-9.935v6.898l-5.98 3.445a11.54 11.54 0 0 1-.007-.408Zm11.133-.25V4.284C23.659 4.355 28.96 9.7 28.96 16.283c0 6.627-5.373 12-12 12-4.43 0-8.298-2.4-10.377-5.97l10.51-6.131Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

ChartPieSliceFill.displayName = "ChartPieSliceFill";

export default ChartPieSliceFill;
