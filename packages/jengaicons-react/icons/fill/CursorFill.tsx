import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const CursorFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M9.326 7.727a.5.5 0 0 0-.619.618l3.72 13.017a.5.5 0 0 0 .912.117l2.723-4.605 7.691 7.692a1 1 0 1 0 1.414-1.415l-7.726-7.726 5.042-3.064a.5.5 0 0 0-.122-.908L9.326 7.727Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

CursorFill.displayName = "CursorFill";

export default CursorFill;
