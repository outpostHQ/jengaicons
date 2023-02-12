import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowFatUpsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M6.167 16.283a.5.5 0 0 1-.353-.854L16.607 4.636a.5.5 0 0 1 .707 0L28.107 15.43a.5.5 0 0 1-.354.854H23.46a.5.5 0 0 0-.5.5v10.5a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1v-10.5a.5.5 0 0 0-.5-.5H6.167Z"
        />
      </svg>
    );
  }
);

ArrowFatUpsvgFill.displayName = "ArrowFatUpsvgFill";

export default ArrowFatUpsvgFill;
