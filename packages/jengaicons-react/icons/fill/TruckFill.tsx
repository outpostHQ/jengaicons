import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const TruckFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M3.96 8.14a1 1 0 0 1 1-1h17.143a1 1 0 0 1 1 1v.714h4.143a1 1 0 0 1 .927.626l1.715 4.252a1 1 0 0 1 .072.374v7.748a1 1 0 0 1-1 1h-2.142a3.573 3.573 0 0 1-6.86 0h-5.997a3.573 3.573 0 0 1-6.86 0H4.96a1 1 0 0 1-1-1V8.14Zm17.858 13.774a1.571 1.571 0 1 0 .317-1.007l-.013.018a1.612 1.612 0 0 0-.304.989Zm4.753-11.06 1.31 3.252h-4.778v-3.252h3.468ZM21.103 9.14v7.634H5.96V9.14h15.143ZM10.53 20.283a1.571 1.571 0 1 0 0 3.143 1.571 1.571 0 0 0 0-3.143Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

TruckFill.displayName = "TruckFill";

export default TruckFill;
