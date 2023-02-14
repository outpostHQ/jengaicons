import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const GameController = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          d="M18.508 12.734H21.8M10.28 12.734h3.292M11.926 11.089v3.29"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeWidth={weight || weightCtx || "2"}
          d="m6.907 9.942-2.373 10.1a3.047 3.047 0 0 0 5.33 2.62l3.506-4.306a.977.977 0 0 1 .757-.36h6.703a5 5 0 0 0 5-5v-1.217a4.395 4.395 0 0 0-4.395-4.395h-11.3a3.317 3.317 0 0 0-3.228 2.558Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeWidth={weight || weightCtx || "2"}
          d="m25.812 11.095 1.75 8.975a3.106 3.106 0 0 1-1.577 3.33v0a3.106 3.106 0 0 1-3.88-.775l-3.768-4.63"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

GameController.displayName = "GameController";

export default GameController;