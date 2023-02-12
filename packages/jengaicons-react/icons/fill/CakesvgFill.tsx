import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const CakesvgFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16.96 13.514v-2.77"
      />
      <path
        fill={color || colorCtx || "#000000"}
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16.96 10.745c5.333-1.847 0-6.462 0-6.462s-5.538 4.615 0 6.462Z"
      />
      <path
        fill={color || colorCtx || "#000000"}
        d="M20.883 17.898a3.923 3.923 0 1 1-7.846 0"
      />
      <path
        fill={color || colorCtx || "#000000"}
        d="M13.037 17.898a3.923 3.923 0 0 1-3.847 3.923c-2.2.042-4-1.8-4-4v-1.538a2.77 2.77 0 0 1 2.77-2.77h18a2.769 2.769 0 0 1 2.769 2.77v1.538c0 2.2-1.8 4.042-4 4a3.923 3.923 0 0 1-3.846-3.923"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.883 17.898a3.923 3.923 0 1 1-7.846 0 3.923 3.923 0 0 1-3.847 3.923c-2.2.042-4-1.8-4-4v-1.538a2.77 2.77 0 0 1 2.77-2.77h18a2.769 2.769 0 0 1 2.769 2.77v1.538c0 2.2-1.8 4.042-4 4a3.923 3.923 0 0 1-3.846-3.923Z"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M27.114 21.045v6.315a.923.923 0 0 1-.923.923H7.729a.923.923 0 0 1-.923-.923v-6.315"
      />

      {children || childrenCtx}
    </svg>
  );
});

CakesvgFill.displayName = "CakesvgFill";

export default CakesvgFill;
