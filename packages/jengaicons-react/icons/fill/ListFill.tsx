import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ListFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M6.73 9.57a1 1 0 0 1 1-1H26.19a1 1 0 1 1 0 2H7.729a1 1 0 0 1-1-1Zm0 6.713a1 1 0 0 1 1-1H26.19a1 1 0 1 1 0 2H7.729a1 1 0 0 1-1-1Zm1 5.713a1 1 0 1 0 0 2H26.19a1 1 0 1 0 0-2H7.729Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

ListFill.displayName = "ListFill";

export default ListFill;
