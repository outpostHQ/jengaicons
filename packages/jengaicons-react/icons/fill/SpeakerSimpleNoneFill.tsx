import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SpeakerSimpleNoneFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M24.028 26.422V7.179a.5.5 0 0 0-.813-.39l-7.092 5.695h-1.76a4.472 4.472 0 0 0 0 8.944h1.76l7.103 5.392a.5.5 0 0 0 .802-.398Z"
        />
      </svg>
    );
  }
);

SpeakerSimpleNoneFill.displayName = "SpeakerSimpleNoneFill";

export default SpeakerSimpleNoneFill;
