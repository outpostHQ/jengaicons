import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Hamburger = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          d="M4 16.462h24"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeWidth={weight || weightCtx || "2"}
          d="m4.418 21.837 4.447-2.017a.1.1 0 0 1 .08 0l4.824 2a.1.1 0 0 0 .08 0l4.459-2a.1.1 0 0 1 .08 0l4.615 2a.1.1 0 0 0 .08 0l4.5-2.018"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M6.77 21.077v.539a5 5 0 0 0 5 5h8.46a5 5 0 0 0 5-5v-.539M13.288 5.385h5.424a7.348 7.348 0 0 1 7.348 7.348c0 .02-.017.036-.037.036H5.977a.037.037 0 0 1-.037-.037 7.348 7.348 0 0 1 7.348-7.347Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

Hamburger.displayName = "Hamburger";

export default Hamburger;
