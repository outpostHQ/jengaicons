import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const PathFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M10.477 5.303a1 1 0 1 0 0 2h11.896a3.02 3.02 0 0 1 0 6.038H10.396a5.936 5.936 0 0 0 0 11.873h13.03c.057 0 .114-.005.17-.014a3.01 3.01 0 0 0 5.864-.945 3.008 3.008 0 0 0-5.838-1.021 1.006 1.006 0 0 0-.197-.02H10.396a3.936 3.936 0 1 1 0-7.873h11.977a5.02 5.02 0 1 0 0-10.038H10.477Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

PathFill.displayName = "PathFill";

export default PathFill;
