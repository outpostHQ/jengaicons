import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context, SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const CloudMoon = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          d="M7.862 18.735c-1.04-.441-1.638-.95-2.366-1.815A7.175 7.175 0 0 1 4 13.927c.53.117 1.07.177 1.612.18a7.175 7.175 0 0 0 6.985-8.777 7.165 7.165 0 0 1 5.552 6.985c0 .112 0 .224-.01.336"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M13.213 17.088a5.374 5.374 0 1 0-1.336 10.582h8.291c1.937 0 3.878-.523 5.247-1.891.363-.363.723-.76 1.05-1.18a7.678 7.678 0 1 0-13.82-4.607"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

CloudMoon.displayName = "CloudMoon";

export default CloudMoon;
