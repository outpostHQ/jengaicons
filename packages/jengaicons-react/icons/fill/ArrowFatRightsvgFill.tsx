import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ArrowFatRightsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fill={color || colorCtx || "#000000"}
          d="M16.96 5.49a.5.5 0 0 1 .854-.354L28.607 15.93a.5.5 0 0 1 0 .708L17.814 27.428a.5.5 0 0 1-.854-.353v-4.293a.5.5 0 0 0-.5-.5H5.96a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h10.5a.5.5 0 0 0 .5-.5V5.49Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ArrowFatRightsvgFill.displayName = "ArrowFatRightsvgFill";

export default ArrowFatRightsvgFill;
