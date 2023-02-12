import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const UmbrellaFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M3.96 17.32c0-7.18 5.82-13 13-13s13 5.82 13 13v.732a1 1 0 0 1-1 1H17.97v6.426a1.768 1.768 0 0 0 3.536 0v-.252a1 1 0 0 1 2 0v.252a3.768 3.768 0 0 1-7.536 0V19.05H4.96a1 1 0 0 1-1-1v-.73Zm2.003-.268h6.388c.288-6.302 3.241-9.724 4.263-10.726-5.826.18-10.51 4.89-10.65 10.726Zm21.994 0h-6.388c-.288-6.302-3.241-9.724-4.263-10.726 5.826.18 10.51 4.89 10.65 10.726Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

UmbrellaFill.displayName = "UmbrellaFill";

export default UmbrellaFill;
