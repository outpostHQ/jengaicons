import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const SpeakerSimpleXFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, style } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      style: styleCtx,
    } = useContext(JengaIconContext);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        ref={ref}
        style={{
          ...styleCtx,
          ...style,
        }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          fill={color || colorCtx || "#000000"}
          fillRule="evenodd"
          d="M19.097 7.18v19.242a.5.5 0 0 1-.802.398l-7.103-5.392h-1.76a4.472 4.472 0 0 1 0-8.944h1.76l7.092-5.694a.5.5 0 0 1 .813.39Zm10.57 6.396a1 1 0 0 1 0 1.414l-1.793 1.793 1.793 1.793a1 1 0 0 1-1.414 1.414l-1.793-1.793-1.793 1.793a1 1 0 0 1-1.414-1.414l1.793-1.793-1.793-1.793a1 1 0 1 1 1.414-1.414l1.793 1.793 1.793-1.793a1 1 0 0 1 1.414 0Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

SpeakerSimpleXFill.displayName = "SpeakerSimpleXFill";

export default SpeakerSimpleXFill;
