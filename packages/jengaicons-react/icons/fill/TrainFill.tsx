import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const TrainFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M7.268 5.283a1 1 0 0 1 1-1h17.384a1 1 0 0 1 1 1v2.615H7.268V5.283Zm0 4.615h19.384v4.462H7.268V9.898Zm0 6.462h19.384v7.23a1 1 0 0 1-1 1h-3.75l2.32 3.093a1 1 0 0 1-1.6 1.2l-2.77-3.692a.996.996 0 0 1-.2-.6h-5.384c0 .209-.065.42-.2.6l-2.77 3.692a1 1 0 1 1-1.6-1.2l2.32-3.092h-3.75a1 1 0 0 1-1-1V16.36Zm4.615 5.461a1.385 1.385 0 1 0 0-2.769 1.385 1.385 0 0 0 0 2.77Zm11.539-1.384a1.385 1.385 0 1 1-2.77 0 1.385 1.385 0 0 1 2.77 0Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

TrainFill.displayName = "TrainFill";

export default TrainFill;
