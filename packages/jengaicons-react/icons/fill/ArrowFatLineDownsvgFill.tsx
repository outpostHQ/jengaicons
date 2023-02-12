import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowFatLineDownsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M6.167 16.283a.5.5 0 0 0-.353.854l10.792 10.792a.5.5 0 0 0 .707 0l10.793-10.792a.5.5 0 0 0-.353-.854H23.46a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v7a.5.5 0 0 1-.5.5H6.167Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M22.96 4.283h-12"
        />
      </svg>
    );
  }
);

ArrowFatLineDownsvgFill.displayName = "ArrowFatLineDownsvgFill";

export default ArrowFatLineDownsvgFill;
