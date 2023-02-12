import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ArrowFatLeftsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.96 5.49a.5.5 0 0 0-.853-.354L5.314 15.93a.5.5 0 0 0 0 .708l10.793 10.792a.5.5 0 0 0 .853-.353v-4.293a.5.5 0 0 1 .5-.5h10.5a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1h-10.5a.5.5 0 0 1-.5-.5V5.49Z"
          fill={color || colorCtx || "#000000"}
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ArrowFatLeftsvgFill.displayName = "ArrowFatLeftsvgFill";

export default ArrowFatLeftsvgFill;
