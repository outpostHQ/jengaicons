import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const DotsNineFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M10.19 25.514a2.77 2.77 0 1 0-5.538 0 2.77 2.77 0 0 0 5.538 0Zm0-9.231a2.77 2.77 0 1 0-5.538 0 2.77 2.77 0 0 0 5.538 0Zm-2.769-12a2.77 2.77 0 1 1 0 5.538 2.77 2.77 0 0 1 0-5.538Zm12.308 21.23a2.77 2.77 0 1 0-5.538 0 2.77 2.77 0 0 0 5.538 0Zm0-9.23a2.77 2.77 0 1 0-5.538 0 2.77 2.77 0 0 0 5.538 0Zm-2.77-12a2.77 2.77 0 1 1 0 5.538 2.77 2.77 0 0 1 0-5.538Zm9.54 18.461a2.77 2.77 0 1 1 0 5.539 2.77 2.77 0 0 1 0-5.539Zm0-9.23a2.77 2.77 0 1 1 0 5.538 2.77 2.77 0 0 1 0-5.539Zm2.768-6.462a2.77 2.77 0 1 0-5.538 0 2.77 2.77 0 0 0 5.538 0Z"
        fill={color || colorCtx || "#000000"}
      />

      {children || childrenCtx}
    </svg>
  );
});

DotsNineFill.displayName = "DotsNineFill";

export default DotsNineFill;
