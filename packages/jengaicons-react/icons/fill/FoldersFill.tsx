import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FoldersFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M7.8 6.683a1 1 0 0 1 1-1h6.72a1 1 0 0 1 .675.262l3.073 2.81h9.692a1 1 0 0 1 1 1v12.288a1 1 0 0 1-1 1h-3.84v1.84a1 1 0 0 1-1 1H5.96a1 1 0 0 1-1-1v-13.36a1 1 0 0 1 1-1H7.8v-3.84Zm2 3.84h1.492a1 1 0 0 1 .675.262l2.786 2.548a1 1 0 0 0 .675.262h8.692a1 1 0 0 1 1 1v6.448h2.84V10.755h-9.08a.996.996 0 0 1-.68-.267l-3.068-2.805H9.8v2.84Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

FoldersFill.displayName = "FoldersFill";

export default FoldersFill;
