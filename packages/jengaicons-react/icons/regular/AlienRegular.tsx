import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const AlienRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M26.154 14.154C26.154 19.762 19.692 28 16 28S5.846 19.762 5.846 14.154a10.154 10.154 0 0 1 20.308 0v0Z"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12.994 18.534a4.022 4.022 0 0 1-4.022-4.022v-.503a1.006 1.006 0 0 1 1.006-1.005A4.022 4.022 0 0 1 14 17.026v.503a1.006 1.006 0 0 1-1.006 1.005v0ZM22.022 13.004a1.005 1.005 0 0 1 1.006 1.005v.503a4.022 4.022 0 0 1-4.022 4.023A1.006 1.006 0 0 1 18 17.529v-.503a4.022 4.022 0 0 1 4.022-4.022ZM14.154 22.461c1.43.924 2.256.92 3.692 0"
      />

      {children || childrenCtx}
    </svg>
  );
});

AlienRegular.displayName = "AlienRegular";

export default AlienRegular;
