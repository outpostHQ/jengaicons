import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SpeakerNoneFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M24.029 7.162v19.242a.5.5 0 0 1-.802.398l-6.267-4.756V11.794l6.256-5.022a.5.5 0 0 1 .813.39Zm-9.069 5.304v8.944h-.596a4.472 4.472 0 0 1 0-8.944h.596Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

SpeakerNoneFill.displayName = "SpeakerNoneFill";

export default SpeakerNoneFill;
