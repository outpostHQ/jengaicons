import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const PenNibFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="m8.08 10.699 6.89-2.157a.569.569 0 0 1 .572.14l8.992 8.993c.16.159.21.397.13.606l-2.507 6.524a.57.57 0 0 1-.425.355L5.636 28.227a.569.569 0 0 1-.668-.651l2.72-16.427a.569.569 0 0 1 .392-.45Z"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m8.08 10.699 6.89-2.157a.569.569 0 0 1 .572.14l8.992 8.993c.16.159.21.397.13.606l-2.507 6.524a.57.57 0 0 1-.425.355L5.636 28.227a.569.569 0 0 1-.668-.651l2.72-16.427a.569.569 0 0 1 .392-.45ZM13.499 19.817l-8.066 8.065"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13.905 19.383a2.397 2.397 0 1 0 3.39-3.39 2.397 2.397 0 0 0-3.39 3.39ZM24.816 17.964l4.144-4.144-9.491-9.492-4.145 4.145"
      />

      {children || childrenCtx}
    </svg>
  );
});

PenNibFill.displayName = "PenNibFill";

export default PenNibFill;
