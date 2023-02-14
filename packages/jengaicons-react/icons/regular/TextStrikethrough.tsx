import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context, SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const TextStrikethrough = forwardRef<SVGSVGElement, JengaIconRegularProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, weight } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      weight: weightCtx,
    } = useContext(JengaIconContext as Context<JengaIconRegularProps>);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        strokeWidth={weight || weightCtx || 2}
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
          strokeWidth={weight || weightCtx || "2"}
          d="M6 16h20M10.129 12.364a2.895 2.895 0 0 1-.14-.91c0-2.51 2.496-4.545 6.01-4.545 2.703 0 4.803 1.203 5.63 2.9M9.636 20.545c0 2.51 2.85 4.546 6.364 4.546 3.515 0 6.364-2.035 6.364-4.546 0-2.7-2.457-3.746-5.182-4.545"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

TextStrikethrough.displayName = "TextStrikethrough";

export default TextStrikethrough;
