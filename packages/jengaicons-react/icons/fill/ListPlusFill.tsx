import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ListPlusFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M6.73 8.975a1 1 0 0 1 1-1h16.923a1 1 0 1 1 0 2H7.729a1 1 0 0 1-1-1Zm0 6.154a1 1 0 0 1 1-1h16.923a1 1 0 1 1 0 2H7.729a1 1 0 0 1-1-1Zm1 5.154a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2h-10Zm12.846 1a1 1 0 0 1 1-1h1.307v-1.308a1 1 0 0 1 2 0v1.308h1.308a1 1 0 1 1 0 2h-1.308v1.308a1 1 0 1 1-2 0v-1.308h-1.307a1 1 0 0 1-1-1Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

ListPlusFill.displayName = "ListPlusFill";

export default ListPlusFill;
