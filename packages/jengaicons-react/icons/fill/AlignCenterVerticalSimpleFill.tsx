import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const AlignCenterVerticalSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M21.415 28.283a1 1 0 0 0 1-1v-10h5.454a1 1 0 0 0 0-2h-5.454v-10a1 1 0 0 0-1-1h-8.91a1 1 0 0 0-1 1v10H6.051a1 1 0 1 0 0 2h5.454v10a1 1 0 0 0 1 1h8.91Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

AlignCenterVerticalSimpleFill.displayName = "AlignCenterVerticalSimpleFill";

export default AlignCenterVerticalSimpleFill;
