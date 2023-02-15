import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const EjectFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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

      <rect
        width="24"
        height="5.455"
        x="4.96"
        y="23.07"
        fill={color || colorCtx || "#000000"}
        rx=".5"
      />
      <path
        fill={color || colorCtx || "#000000"}
        d="M16.427 5.478a.5.5 0 0 1 .756 0l10.75 12.4a.5.5 0 0 1-.378.828h-21.5a.5.5 0 0 1-.378-.828l10.75-12.4Z"
      />

      {children || childrenCtx}
    </svg>
  );
});

EjectFill.displayName = "EjectFill";

export default EjectFill;
