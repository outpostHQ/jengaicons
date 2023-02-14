import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Cactus = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          d="M5.846 27.577h20.308M12.308 27.577v-9.692h-1.385A6.923 6.923 0 0 1 4 10.962v0a2.32 2.32 0 0 1 2.308-2.308 2.32 2.32 0 0 1 2.307 2.308 2.32 2.32 0 0 0 2.308 2.307h1.385V9.115A3.692 3.692 0 0 1 16 5.423v0a3.692 3.692 0 0 1 3.692 3.692v8.77h1.385a2.32 2.32 0 0 0 2.308-2.308v0a2.32 2.32 0 0 1 2.307-2.308A2.32 2.32 0 0 1 28 15.577v0a6.923 6.923 0 0 1-6.923 6.923h-1.385v5.077"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

Cactus.displayName = "Cactus";

export default Cactus;
