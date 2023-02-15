import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const TableFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
  const { size, color, alt, children, mirrored, style } = props;

  const {
    alt: altCtx,
    children: childrenCtx,
    color: colorCtx,
    mirrored: mirroredCtx,
    size: sizeCtx,
    style: styleCtx,
  } = useContext(JengaIconContext);

  return (
    <svg
      width={size || sizeCtx || 32}
      height={size || sizeCtx || 32}
      transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
      ref={ref}
      style={{
        ...styleCtx,
        ...style,
      }}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
    >
      {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

      <path
        fill={color || colorCtx || "#000000"}
        fillRule="evenodd"
        d="M3.96 7.283a1 1 0 0 1 1-1h24a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-24a1 1 0 0 1-1-1v-18Zm24 6v5h-15v-5h15Zm-22 0v5h5v-5h-5Zm0 11v-4h5v4h-5Zm7-4v4h15v-4h-15Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

TableFill.displayName = "TableFill";

export default TableFill;
