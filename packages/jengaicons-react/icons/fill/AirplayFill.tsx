import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const AirplayFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M4.96 5.283a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h2.993a1 1 0 0 0 0-2H5.96v-16h22v16h-1.95a1 1 0 1 0 0 2h2.95a1 1 0 0 0 1-1v-18a1 1 0 0 0-1-1h-24Zm12.38 15.443a.5.5 0 0 0-.76 0l-4.913 5.732a.5.5 0 0 0 .38.825h9.826a.5.5 0 0 0 .38-.826l-4.913-5.731Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

AirplayFill.displayName = "AirplayFill";

export default AirplayFill;
