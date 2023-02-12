import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowFatDownsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M6.167 16.283a.5.5 0 0 0-.353.854l10.793 10.792a.5.5 0 0 0 .707 0l10.793-10.792a.5.5 0 0 0-.354-.854H23.46a.5.5 0 0 1-.5-.5v-10.5a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v10.5a.5.5 0 0 1-.5.5H6.167Z"
        />
      </svg>
    );
  }
);

ArrowFatDownsvgFill.displayName = "ArrowFatDownsvgFill";

export default ArrowFatDownsvgFill;
