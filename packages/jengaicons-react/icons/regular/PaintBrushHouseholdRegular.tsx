import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PaintBrushHouseholdRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m10.164 13.505 8.445 8.446M13.219 21.782l-3.212 3.211M10.336 18.898 7.124 22.11M12.612 28l-8.555-8.555 9.661-9.496 2.695 2.53 6.953-6.954a2.157 2.157 0 0 1 3.051 3.051l-7.296 7.297 2.809 2.81L12.612 28Z"
        />
      </svg>
    );
  }
);

PaintBrushHouseholdRegular.displayName = "PaintBrushHouseholdRegular";

export default PaintBrushHouseholdRegular;
