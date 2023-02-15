import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const AirplaneFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M14.234 7.065v5.23a.04.04 0 0 1-.022.036l-8.977 4.516a.5.5 0 0 0-.275.447v2.851a.5.5 0 0 0 .595.49l8.084-1.567a.5.5 0 0 1 .595.491v2.643a.5.5 0 0 1-.146.354l-1.675 1.674a.5.5 0 0 0-.146.354v2.83a.5.5 0 0 0 .726.445l3.711-1.878a.5.5 0 0 1 .455.002l3.625 1.868a.5.5 0 0 0 .729-.444v-2.823a.5.5 0 0 0-.147-.354l-1.534-1.534a.5.5 0 0 1-.146-.353v-2.784a.5.5 0 0 1 .595-.49l8.084 1.567a.5.5 0 0 0 .595-.491v-2.851a.5.5 0 0 0-.275-.447l-8.977-4.516a.04.04 0 0 1-.022-.035v-5.23a2.726 2.726 0 0 0-5.452 0Z"
      />

      {children || childrenCtx}
    </svg>
  );
});

AirplaneFill.displayName = "AirplaneFill";

export default AirplaneFill;
