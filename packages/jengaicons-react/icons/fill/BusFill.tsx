import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const BusFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M9.762 4.283a5 5 0 0 0-5 5v4.435h24.401V9.283a5 5 0 0 0-5-5H9.762Zm19.401 11.435H4.762v7.557a1.005 1.005 0 0 0-.02.195v4.813a1 1 0 0 0 1 1h5.218a1 1 0 0 0 1-1v-4.174h10v4.174a1 1 0 0 0 1 1h5.217a1 1 0 0 0 1-1V23.47c0-.057-.005-.113-.014-.168v-7.584Zm-1.986 8.391H23.96v3.174h3.217v-3.174ZM6.743 27.283v-3.174H9.96v3.174H6.743Zm5.68-7.87c0 .865-.763 1.566-1.703 1.566-.94 0-1.702-.701-1.702-1.566 0-.864.762-1.565 1.702-1.565s1.702.7 1.702 1.565Zm10.782 1.566c.94 0 1.702-.701 1.702-1.566 0-.864-.762-1.565-1.702-1.565s-1.702.7-1.702 1.565.762 1.566 1.702 1.566Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

BusFill.displayName = "BusFill";

export default BusFill;
