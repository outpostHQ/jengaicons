import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const MusicNotesPlus = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          d="M25.12 4.5v5.76M28 7.38h-5.76M22.72 24.64a3.368 3.368 0 0 0 3.36-3.376 3.368 3.368 0 0 0-3.36-3.376 3.368 3.368 0 0 0-3.36 3.376 3.368 3.368 0 0 0 3.36 3.377ZM7.36 28.5a3.368 3.368 0 0 0 3.36-3.377 3.368 3.368 0 0 0-3.36-3.376A3.368 3.368 0 0 0 4 25.124 3.368 3.368 0 0 0 7.36 28.5Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M10.72 25.179V8.415l6.76-1.776m8.6 14.44v-6.757M10.716 13.924l9.496-2.407"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

MusicNotesPlus.displayName = "MusicNotesPlus";

export default MusicNotesPlus;
