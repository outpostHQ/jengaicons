import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const ArrowUUpRight = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          d="M22 25.121H11a7 7 0 0 1-7-7v0a7 7 0 0 1 7-7h17"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M23.757 6.879 28 11.12l-4.243 4.243"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ArrowUUpRight.displayName = "ArrowUUpRight";

export default ArrowUUpRight;
