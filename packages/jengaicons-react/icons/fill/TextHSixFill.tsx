import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const TextHSixFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M7.73 8.948a1 1 0 0 1 1 1v4.43h7.411v-4.43a1 1 0 1 1 2 0v10.86a1 1 0 0 1-2 0v-4.43H8.73v4.43a1 1 0 1 1-2 0V9.948a1 1 0 0 1 1-1Zm17.164 4.123a1 1 0 0 1 .346 1.372l-1.267 2.12a3.534 3.534 0 1 1-3.325 1.666l2.875-4.812a1 1 0 0 1 1.37-.345Zm-2.563 6.241a1.534 1.534 0 1 0 .017-.028l-.017.028Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

TextHSixFill.displayName = "TextHSixFill";

export default TextHSixFill;
