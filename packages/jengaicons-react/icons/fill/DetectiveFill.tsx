import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const DetectiveFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
    } = useContext(JengaIconContext);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        ref={ref}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M8.007 15.327v-2.499c0-4.025 3.247-8.022 5.693-4.826l.072.094c.863 1.129 1.703 2.228 3.188 2.228 1.366 0 2.128-.884 2.872-1.871 2.581-3.424 6.082.618 6.082 4.906v1.968h3.046a1 1 0 0 1 0 2h-24a1 1 0 1 1 0-2h3.047Zm5.925 9.19a3.362 3.362 0 0 1-6.572-.99 3.36 3.36 0 0 1 6.572-.989c.048-.007.098-.01.148-.01h5.76c.05 0 .1.003.148.01a3.361 3.361 0 0 1 6.572.99 3.36 3.36 0 0 1-6.572.988c-.048.007-.098.011-.148.011h-5.76c-.05 0-.1-.004-.148-.01Z"
          fill={color || colorCtx || "#000000"}
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

DetectiveFill.displayName = "DetectiveFill";

export default DetectiveFill;
