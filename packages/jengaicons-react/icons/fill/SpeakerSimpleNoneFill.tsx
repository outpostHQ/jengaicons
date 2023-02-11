import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SpeakerSimpleNoneFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size = 32 } = props;

    return (
      <svg
        style={{ width: size, height: size }}
        ref={ref}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        {...props}
      >
        <path
          d="M24.028 26.422V7.179a.5.5 0 0 0-.813-.39l-7.092 5.695h-1.76a4.472 4.472 0 0 0 0 8.944h1.76l7.103 5.392a.5.5 0 0 0 .802-.398Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

SpeakerSimpleNoneFill.displayName = "SpeakerSimpleNoneFill";

export default SpeakerSimpleNoneFill;
