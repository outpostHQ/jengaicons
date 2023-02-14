import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FileXlsFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M6.108 19.391h21.703a1 1 0 0 0 1-1v-6.68a1 1 0 0 0-.29-.705l-6.395-6.422a1 1 0 0 0-.708-.294H6.108a1 1 0 0 0-1 1v13.101a1 1 0 0 0 1 1Zm15.793-8.66V5.508l5.727 5.723h-5.227a.5.5 0 0 1-.5-.5ZM7.919 21.316a1 1 0 0 0-1.6 1.2l1.88 2.507-1.88 2.508a1 1 0 1 0 1.6 1.2l1.53-2.041 1.532 2.041a1 1 0 1 0 1.6-1.2L10.7 25.023l1.88-2.507a1 1 0 1 0-1.6-1.2l-1.53 2.04-1.53-2.04Zm13.523 2.154a2.554 2.554 0 0 1 2.554-2.554h3.323a1 1 0 0 1 0 2h-3.323a.554.554 0 0 0 0 1.107h1.769a2.554 2.554 0 1 1 0 5.108h-3.323a1 1 0 1 1 0-2h3.323a.554.554 0 0 0 0-1.108h-1.769a2.554 2.554 0 0 1-2.554-2.553Zm-5.518-2.554a1 1 0 0 1 1 1v5.345h2.626a1 1 0 0 1 0 2h-3.626a1 1 0 0 1-1-1v-6.345a1 1 0 0 1 1-1Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

FileXlsFill.displayName = "FileXlsFill";

export default FileXlsFill;
