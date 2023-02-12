import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FadersHorizontalRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M17.09 22.5H4M28 22.5h-6.545M8.364 10.5H4M28 10.5H12.727M12.727 7.227v6.546M21.455 25.773v-6.546"
        />
      </svg>
    );
  }
);

FadersHorizontalRegular.displayName = "FadersHorizontalRegular";

export default FadersHorizontalRegular;
