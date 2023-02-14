import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ArticleFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        fillRule="evenodd"
        d="M28.96 7.783a1 1 0 0 0-1-1h-22a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-18Zm-18.5 4a1 1 0 1 0 0 2h13a1 1 0 0 0 0-2h-13Zm-1 5a1 1 0 0 1 1-1h13a1 1 0 0 1 0 2h-13a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h13a1 1 0 0 0 0-2h-13Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

ArticleFill.displayName = "ArticleFill";

export default ArticleFill;
