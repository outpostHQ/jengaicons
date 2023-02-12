import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DetectiveFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M8.007 15.327v-2.499c0-4.025 3.247-8.022 5.693-4.826l.072.094c.863 1.129 1.703 2.228 3.188 2.228 1.366 0 2.128-.884 2.872-1.871 2.581-3.424 6.082.618 6.082 4.906v1.968h3.046a1 1 0 0 1 0 2h-24a1 1 0 1 1 0-2h3.047Zm5.925 9.19a3.362 3.362 0 0 1-6.572-.99 3.36 3.36 0 0 1 6.572-.989c.048-.007.098-.01.148-.01h5.76c.05 0 .1.003.148.01a3.361 3.361 0 0 1 6.572.99 3.36 3.36 0 0 1-6.572.988c-.048.007-.098.011-.148.011h-5.76c-.05 0-.1-.004-.148-.01Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

DetectiveFill.displayName = "DetectiveFill";

export default DetectiveFill;
