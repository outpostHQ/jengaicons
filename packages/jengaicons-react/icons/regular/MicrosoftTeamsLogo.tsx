import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const MicrosoftTeamsLogo = forwardRef<SVGSVGElement, JengaIconRegularProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, weight, style } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      weight: weightCtx,
      style: styleCtx,
    } = useContext(JengaIconContext as Context<JengaIconRegularProps>);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        strokeWidth={weight || weightCtx || 2}
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
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M13.84 13.601H9.52M11.68 19.36v-5.759M13.636 9.761a3.84 3.84 0 1 1 5.244 1.404"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M20.572 6.546a3.12 3.12 0 1 1-.408 3.407"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M4.481 9.761H18.88V23.2H4.481z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeWidth={weight || weightCtx || "2"}
          d="M10.517 22.72a5.28 5.28 0 0 0 5.28 5.28h1.02a6.301 6.301 0 0 0 6.302-6.301v-9.937a.081.081 0 0 0-.081-.08h-4.141"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeWidth={weight || weightCtx || "2"}
          d="M18.88 11.681h8.582c.032 0 .057.026.057.058v7.142a4.32 4.32 0 0 1-4.32 4.32"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

MicrosoftTeamsLogo.displayName = "MicrosoftTeamsLogo";

export default MicrosoftTeamsLogo;
