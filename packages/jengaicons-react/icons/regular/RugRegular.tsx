import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const RugRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M7.692 6.77V4M13.231 6.77V4M24.308 6.77V4M7.692 28v-2.77M13.231 28v-2.77M18.77 6.77V4M18.77 28v-2.77M24.308 28v-2.77"
      />
      <rect
        width="16.615"
        height="18.462"
        x="7.692"
        y="6.769"
        stroke={color || colorCtx || "#000000"}
        strokeWidth="2"
        rx=".5"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m13.197 15.65 2.596-4.183a.1.1 0 0 1 .168-.004l2.837 4.183a.1.1 0 0 1 .003.108l-2.837 4.76a.1.1 0 0 1-.174-.004l-2.596-4.76a.1.1 0 0 1 .003-.1Z"
      />

      {children || childrenCtx}
    </svg>
  );
});

RugRegular.displayName = "RugRegular";

export default RugRegular;
