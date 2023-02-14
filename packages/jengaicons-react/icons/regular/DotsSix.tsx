import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const DotsSix = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          strokeMiterlimit="10"
          strokeWidth={weight || weightCtx || "2"}
          d="M16 14a2.77 2.77 0 1 0 0-5.538A2.77 2.77 0 0 0 16 14ZM6.77 14a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538ZM25.23 14a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538ZM16 23.538A2.77 2.77 0 1 0 16 18a2.77 2.77 0 0 0 0 5.538ZM6.77 23.538a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538ZM25.23 23.538a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

DotsSix.displayName = "DotsSix";

export default DotsSix;
