import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FilePngFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
    >
      {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

      <path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M6.108 18.367h21.703a1 1 0 0 0 1-1v-6.68a1 1 0 0 0-.29-.705L22.125 3.56a1 1 0 0 0-.708-.294H6.108a1 1 0 0 0-1 1v13.1a1 1 0 0 0 1 1Zm15.793-8.66V4.484l5.727 5.723h-5.227a.5.5 0 0 1-.5-.5Zm-6.709 10.94a1 1 0 0 0-1.84.54v7.096a1 1 0 1 0 2 0v-3.69l2.718 4.23a1 1 0 0 0 1.842-.54v-7.096a1 1 0 1 0-2 0v3.69l-2.72-4.23Zm-9.166-.46c-.565 0-1.023.458-1.023 1.023V28.283a1 1 0 1 0 2 0v-2.01h1.591a3.043 3.043 0 0 0 0-6.086H6.026Zm2.568 4.086h-1.59v-2.086h1.59a1.043 1.043 0 1 1 0 2.086Zm13.032.314a4.4 4.4 0 0 1 4.4-4.4h1.922a1 1 0 1 1 0 2h-1.922a2.4 2.4 0 1 0 0 4.8h.922v-1.272h-1.097a1 1 0 1 1 0-2h1.597a1.5 1.5 0 0 1 1.5 1.5v2.746c0 .567-.46 1.026-1.026 1.026h-1.896a4.4 4.4 0 0 1-4.4-4.4Z"
        fill={color || colorCtx || "#000000"}
      />

      {children || childrenCtx}
    </svg>
  );
});

FilePngFill.displayName = "FilePngFill";

export default FilePngFill;
