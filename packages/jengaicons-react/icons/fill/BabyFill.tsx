import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const BabyFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M14.157 5.112C8.882 6.375 4.96 11.121 4.96 16.783c0 6.627 5.372 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12-.185 0-.368.004-.55.012-.522 1.268-.883 2.65-1.187 4.056-.18.83.471 1.645 1.358 1.645.762 0 1.38-.617 1.38-1.379V8.85a1 1 0 1 1 2 0v.268a3.379 3.379 0 0 1-3.38 3.38c-2.124 0-3.77-1.956-3.313-4.07.235-1.083.513-2.21.889-3.315Zm-1.697 13.17a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm9 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-.63 4.335a1 1 0 1 0-1.105-1.667 5.003 5.003 0 0 1-5.53 0 1 1 0 0 0-1.104 1.667 7.004 7.004 0 0 0 7.74 0Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

BabyFill.displayName = "BabyFill";

export default BabyFill;
