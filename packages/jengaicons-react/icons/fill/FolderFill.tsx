import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FolderFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M5.46 5.283a1 1 0 0 0-1 1v19a1 1 0 0 0 1 1h23a1 1 0 0 0 1-1v-14a1 1 0 0 0-1-1h-10a1 1 0 0 0-.293-.707l-4-4a1 1 0 0 0-.707-.293h-8Zm1 4v-2h6.586l2 2H6.46Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

FolderFill.displayName = "FolderFill";

export default FolderFill;
