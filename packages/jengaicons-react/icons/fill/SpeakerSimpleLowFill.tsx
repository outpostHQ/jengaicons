import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SpeakerSimpleLowFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M21.1 7.18v19.242a.5.5 0 0 1-.803.398l-7.103-5.392h-1.76a4.472 4.472 0 0 1 0-8.944h1.76l7.092-5.694a.5.5 0 0 1 .813.39Zm6.858 6.603a1 1 0 1 0-2 0v6a1 1 0 0 0 2 0v-6Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

SpeakerSimpleLowFill.displayName = "SpeakerSimpleLowFill";

export default SpeakerSimpleLowFill;
