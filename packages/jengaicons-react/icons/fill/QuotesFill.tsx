import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const QuotesFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        stroke={color || colorCtx || "#000000"}
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4.96 8.13h9.5v9.5h-9.5z"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeWidth="2"
        d="M14.446 15.824v1.557c0 1.936 0 6.83-5.024 7.055"
      />
      <path
        fill={color || colorCtx || "#000000"}
        stroke={color || colorCtx || "#000000"}
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19.46 8.13h9.5v9.5h-9.5z"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeWidth="2"
        d="M28.946 15.824v1.557c0 1.936 0 6.83-5.024 7.055"
      />

      {children || childrenCtx}
    </svg>
  );
});

QuotesFill.displayName = "QuotesFill";

export default QuotesFill;
