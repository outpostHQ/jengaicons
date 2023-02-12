import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const RewindCircleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.96 28.783c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.627 5.372 12 12 12Zm.031-11.575a.5.5 0 0 1 0-.85l5.035-3.127a.5.5 0 0 1 .764.425v6.254a.5.5 0 0 1-.764.425l-5.035-3.127Zm-6.9-.85a.5.5 0 0 0 0 .85l5.034 3.127a.5.5 0 0 0 .764-.425v-6.254a.5.5 0 0 0-.764-.425l-5.034 3.127Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

RewindCircleFill.displayName = "RewindCircleFill";

export default RewindCircleFill;
