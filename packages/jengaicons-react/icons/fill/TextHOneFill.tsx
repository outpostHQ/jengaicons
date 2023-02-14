import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const TextHOneFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M8.73 8.803a1 1 0 1 0-2 0V21.11a1 1 0 1 0 2 0v-5.153h8.666v5.153a1 1 0 1 0 2 0V8.803a1 1 0 1 0-2 0v5.153H8.73V8.803Zm18.461 5.333a1 1 0 0 0-1.537-.843l-2.462 1.568a1 1 0 1 0 1.075 1.686l.924-.588v7.804a1 1 0 1 0 2 0v-9.627Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

TextHOneFill.displayName = "TextHOneFill";

export default TextHOneFill;
