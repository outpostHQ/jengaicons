import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SpeakerSimpleXFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M19.097 7.18v19.242a.5.5 0 0 1-.802.398l-7.103-5.392h-1.76a4.472 4.472 0 0 1 0-8.944h1.76l7.092-5.694a.5.5 0 0 1 .813.39Zm10.57 6.396a1 1 0 0 1 0 1.414l-1.793 1.793 1.793 1.793a1 1 0 0 1-1.414 1.414l-1.793-1.793-1.793 1.793a1 1 0 0 1-1.414-1.414l1.793-1.793-1.793-1.793a1 1 0 1 1 1.414-1.414l1.793 1.793 1.793-1.793a1 1 0 0 1 1.414 0Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

SpeakerSimpleXFill.displayName = "SpeakerSimpleXFill";

export default SpeakerSimpleXFill;
