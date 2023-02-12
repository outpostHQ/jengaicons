import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const GenderTransgenderFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M29.63 4.042a.998.998 0 0 1 .33.741v6.533a1 1 0 1 1-2 0V7.197l-3.847 3.847 2.424 2.423a1 1 0 0 1-1.414 1.414l-2.424-2.423-2.781 2.781a1.036 1.036 0 0 1-.044.041 8.348 8.348 0 1 1-1.412-1.412l.041-.043 2.782-2.781-2.423-2.423a1 1 0 0 1 1.414-1.415l2.423 2.423 3.847-3.846h-4.12a1 1 0 1 1 0-2h6.534c.258 0 .493.098.67.259Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

GenderTransgenderFill.displayName = "GenderTransgenderFill";

export default GenderTransgenderFill;
