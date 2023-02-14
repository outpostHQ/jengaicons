import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const DragDrop = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          stroke-dasharray="4 4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M25.276 13.24V5.346H4.969v20.307h8.177"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M20.957 16.708V9.666H9.288v11.668h8.02"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeWidth={weight || weightCtx || "2"}
          d="m20.275 20.194-2.4-4.157a1.424 1.424 0 0 0-1.946-.521v0a1.424 1.424 0 0 0-.521 1.945l3.23 5.595"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeWidth={weight || weightCtx || "2"}
          d="m23.003 19.22-.907-1.57a1.424 1.424 0 0 0-1.946-.521v0a1.425 1.425 0 0 0-.521 1.946l.906 1.57"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeWidth={weight || weightCtx || "2"}
          d="m16.242 24.604-.285-.493a1.71 1.71 0 0 1 .626-2.335l.74-.427m9.002-2.072-1.282-2.22a1.424 1.424 0 1 0-2.467 1.424l.427.74m3.192-.17c1.591 2.757.92 6.02-2.098 7.762-3.23 1.865-6.335.425-7.926-2.332"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

DragDrop.displayName = "DragDrop";

export default DragDrop;
