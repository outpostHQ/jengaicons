import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const PaperclipFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="m20.04 10.716-9.098 9.1a1.749 1.749 0 0 0 0 2.473v0c.683.682 1.79.682 2.473 0l10.794-10.794a3.489 3.489 0 0 0 0-4.934v0a3.489 3.489 0 0 0-4.934 0l-10.8 10.8a5.238 5.238 0 0 0 0 7.407v0a5.238 5.238 0 0 0 7.407 0l8.559-8.559"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

PaperclipFill.displayName = "PaperclipFill";

export default PaperclipFill;
