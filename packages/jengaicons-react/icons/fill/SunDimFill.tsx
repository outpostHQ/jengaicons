import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const SunDimFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16.96 3.783a1 1 0 0 1 1 1v.96a1 1 0 0 1-2 0v-.96a1 1 0 0 1 1-1Zm0 20.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4ZM9.183 7.592A1 1 0 1 0 7.77 9.006l.672.672a1 1 0 0 0 1.414-1.414l-.672-.672ZM3.96 16.783a1 1 0 0 1 1-1h.96a1 1 0 1 1 0 2h-.96a1 1 0 0 1-1-1Zm5.895 8.52a1 1 0 1 0-1.414-1.415l-.672.672a1 1 0 1 0 1.414 1.414l.672-.672Zm7.105 1.52a1 1 0 0 1 1 1v.96a1 1 0 0 1-2 0v-.96a1 1 0 0 1 1-1Zm8.52-2.935a1 1 0 1 0-1.415 1.414l.672.672a1 1 0 0 0 1.414-1.414l-.672-.672ZM27 16.783a1 1 0 0 1 1-1h.96a1 1 0 1 1 0 2H28a1 1 0 0 1-1-1Zm-.849-7.777a1 1 0 0 0-1.414-1.414l-.672.672a1 1 0 1 0 1.414 1.414l.672-.672Z"
        fill={color || colorCtx || "#000000"}
      />

      {children || childrenCtx}
    </svg>
  );
});

SunDimFill.displayName = "SunDimFill";

export default SunDimFill;
