import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const PlaylistFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
  const { size, color, alt, children, mirrored } = props;

  const {
    alt: altCtx,
    children: childrenCtx,
    color: colorCtx,
    mirrored: mirroredCtx,
    size: sizeCtx,
  } = useContext(JengaIconContext);

  return (
    <svg
      width={size || sizeCtx || 32}
      height={size || sizeCtx || 32}
      transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
    >
      {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

      <path
        fill={color || colorCtx || "#000000"}
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19.874 25.903a3.016 3.016 0 1 0 0-6.032 3.016 3.016 0 0 0 0 6.032Z"
      />
      <path
        fill={color || colorCtx || "#000000"}
        fillRule="evenodd"
        d="M4.96 6.663a1 1 0 1 0 0 2h21.12a1 1 0 1 0 0-2H4.96Zm0 7.68a1 1 0 1 0 0 2h13.4a1 1 0 1 0 0-2H4.96Zm-1 8.68a1 1 0 0 1 1-1h7.64a1 1 0 0 1 0 2H4.96a1 1 0 0 1-1-1Zm19.227-11.97a1 1 0 0 0-1.297.955v10.996a1 1 0 0 0 2 0v-9.638l4.773 1.484a1 1 0 0 0 .594-1.91l-6.07-1.887Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

PlaylistFill.displayName = "PlaylistFill";

export default PlaylistFill;
