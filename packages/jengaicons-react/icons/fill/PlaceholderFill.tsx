import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PlaceholderFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4.96 5.698v21.585a1 1 0 0 0 1 1h21.585L4.96 5.698Zm24 21.171V5.283a1 1 0 0 0-1-1H6.374L28.96 26.869Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

PlaceholderFill.displayName = "PlaceholderFill";

export default PlaceholderFill;
