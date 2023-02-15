import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ImageFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M3.96 6.783a1 1 0 0 1 1-1h24a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1h-24a1 1 0 0 1-1-1v-20Zm2 13.978 5.384-5.384a.5.5 0 0 1 .707 0l5.943 5.942a.5.5 0 0 0 .707 0l3.797-3.797a.5.5 0 0 1 .708 0l4.754 4.754V7.783h-22v12.978Zm14.5-5.978a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

ImageFill.displayName = "ImageFill";

export default ImageFill;
