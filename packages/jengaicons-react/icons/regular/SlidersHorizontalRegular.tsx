import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SlidersHorizontalRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M18.727 22.5H4M28 22.5h-3.818M21.455 25.227a2.727 2.727 0 1 0 0-5.454 2.727 2.727 0 0 0 0 5.454ZM10 10.5H4M28 10.5H15.455M12.727 13.227a2.727 2.727 0 1 0 0-5.454 2.727 2.727 0 0 0 0 5.454Z"
        />
      </svg>
    );
  }
);

SlidersHorizontalRegular.displayName = "SlidersHorizontalRegular";

export default SlidersHorizontalRegular;
