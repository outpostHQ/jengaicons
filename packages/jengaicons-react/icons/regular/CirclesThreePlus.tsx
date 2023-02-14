import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const CirclesThreePlus = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          d="M8.91 13.818A4.91 4.91 0 1 0 8.908 4a4.91 4.91 0 0 0 0 9.818ZM23.091 13.818a4.91 4.91 0 1 0 0-9.818 4.91 4.91 0 0 0 0 9.818ZM8.91 28a4.909 4.909 0 1 0 0-9.818 4.909 4.909 0 0 0 0 9.818ZM23.09 19.273v7.636M26.91 23.09h-7.637"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

CirclesThreePlus.displayName = "CirclesThreePlus";

export default CirclesThreePlus;
