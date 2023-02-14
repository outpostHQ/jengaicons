import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ChartBarFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M20.388 5.703a1 1 0 0 0-1 1v3.76H13.6a1 1 0 0 0-1 1v4.76H6.88a1 1 0 0 0-1 1v7.64h-.92a1 1 0 1 0 0 2h24a1 1 0 0 0 0-2h-1.92V6.703a1 1 0 0 0-1-1h-5.652Zm-5.788 6.76v12.4h4.72v-12.4H14.6Zm-6.72 12.4v-6.64h4.72v6.64H7.88Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

ChartBarFill.displayName = "ChartBarFill";

export default ChartBarFill;
