import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const RssSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8.423 6.283A18.537 18.537 0 0 1 26.96 24.82M8.423 15.063a9.755 9.755 0 0 1 9.756 9.757"
        />
        <path
          fill={color || colorCtx || "#000000"}
          d="M8.423 26.283a1.463 1.463 0 1 0 0-2.927 1.463 1.463 0 0 0 0 2.927Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

RssSimpleFill.displayName = "RssSimpleFill";

export default RssSimpleFill;
