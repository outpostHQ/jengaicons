import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ChartLineUpFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M5.883 5.176a1 1 0 0 1 1 1v11.726l5.612-5.351a1 1 0 0 1 1.365-.014l6.784 6.204 5.43-7.534h-3.7a1 1 0 0 1 0-2h5.588a1 1 0 0 1 1.076 1v6.135a1 1 0 1 1-2 0v-3.05l-5.429 7.53a1 1 0 0 1-1.486.154L13.2 14.643l-6.316 6.023v4.724h21.154a1 1 0 1 1 0 2H5.883a1 1 0 0 1-1-1V6.176a1 1 0 0 1 1-1Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

ChartLineUpFill.displayName = "ChartLineUpFill";

export default ChartLineUpFill;
