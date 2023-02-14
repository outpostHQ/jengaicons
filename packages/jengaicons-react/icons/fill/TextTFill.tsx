import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const TextTFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M7.73 6.892a1 1 0 0 0-1 1v3.775a1 1 0 1 0 2 0V8.892h7.226v14.781h-2.73a1 1 0 1 0 0 2h7.459a1 1 0 1 0 0-2h-2.729V8.893h7.235v2.774a1 1 0 1 0 2 0V7.892a1 1 0 0 0-1-1H7.729Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

TextTFill.displayName = "TextTFill";

export default TextTFill;
