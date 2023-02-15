import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ReceiptFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M5.684 25.921a.5.5 0 0 1-.724-.447V7.283a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v18.19a.5.5 0 0 1-.723.448l-3.053-1.526a.5.5 0 0 0-.447 0l-3.553 1.776a.5.5 0 0 1-.447 0l-3.553-1.776a.5.5 0 0 0-.447 0l-3.553 1.776a.5.5 0 0 1-.447 0l-3.553-1.776a.5.5 0 0 0-.447 0L5.684 25.92ZM9.46 13.283a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2h-13a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h13a1 1 0 0 0 0-2h-13Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

ReceiptFill.displayName = "ReceiptFill";

export default ReceiptFill;
