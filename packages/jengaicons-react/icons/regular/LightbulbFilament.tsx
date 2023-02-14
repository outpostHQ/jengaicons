import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const LightbulbFilament = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          d="M11.921 28h8.158"
        />
        <path
          fill={color || colorCtx || "#000000"}
          d="m20.074 21.532-.442-.897a1 1 0 0 0-.558.897h1Zm-8.158-.005h1a1 1 0 0 0-.557-.897l-.443.897Zm12.322-8.289a8.239 8.239 0 0 1-4.606 7.397l.883 1.794a10.239 10.239 0 0 0 5.723-9.19h-2ZM16 5a8.238 8.238 0 0 1 8.238 8.238h2C26.238 7.584 21.654 3 16 3v2Zm-8.238 8.238A8.238 8.238 0 0 1 16 5V3C10.346 3 5.762 7.584 5.762 13.238h2Zm4.597 7.392a8.238 8.238 0 0 1-4.597-7.392h-2c0 4.031 2.33 7.516 5.712 9.186l.885-1.794Zm.557 3.599v-2.702h-2v2.701h2Zm0 0h-2a2 2 0 0 0 2 2v-2Zm6.158 0h-6.158v2h6.158v-2Zm0 0v2a2 2 0 0 0 2-2h-2Zm0-2.697v2.697h2v-2.697h-2Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M16 25v-7M20.243 14 16 18.243 11.757 14"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

LightbulbFilament.displayName = "LightbulbFilament";

export default LightbulbFilament;