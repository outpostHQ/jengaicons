import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const RowsFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M5.96 6.465a1 1 0 0 0-1 1V13.1a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V7.465a1 1 0 0 0-1-1h-22Zm0 12a1 1 0 0 0-1 1V25.1a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-5.636a1 1 0 0 0-1-1h-22Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

RowsFill.displayName = "RowsFill";

export default RowsFill;
