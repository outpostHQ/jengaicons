import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Dog = forwardRef<SVGSVGElement, JengaIconRegularProps>((props, ref) => {
  const { size, color, alt, children, mirrored, weight } = props;

  const {
    alt: altCtx,
    children: childrenCtx,
    color: colorCtx,
    mirrored: mirroredCtx,
    size: sizeCtx,
    weight: weightCtx,
  } = useContext(JengaIconContext as Context<JengaIconRegularProps>);

  return (
    <svg
      width={size || sizeCtx || 32}
      height={size || sizeCtx || 32}
      transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
      strokeWidth={weight || weightCtx || 2}
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
        strokeWidth={weight || weightCtx || "2"}
        d="M16 24.762v2.934"
      />
      <path
        fill={color || colorCtx || "#000000"}
        d="M11.598 19.871a1.467 1.467 0 1 0 0-2.934 1.467 1.467 0 0 0 0 2.934ZM20.402 19.871a1.467 1.467 0 1 0 0-2.934 1.467 1.467 0 0 0 0 2.934Z"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={weight || weightCtx || "2"}
        d="M17.956 22.806 16 24.762l-1.956-1.956M13.066 7.156h5.868"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={weight || weightCtx || "2"}
        d="M6.219 15.873v6.824a5 5 0 0 0 5 5h9.563a5 5 0 0 0 5-5v-6.824M6.444 5.303l7.6 1.935L4 17.858 6.444 5.304ZM25.556 5.303l-7.6 1.935L28 17.858 25.556 5.304Z"
      />

      {children || childrenCtx}
    </svg>
  );
});

Dog.displayName = "Dog";

export default Dog;
