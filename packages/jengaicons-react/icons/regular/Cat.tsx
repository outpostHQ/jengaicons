import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Cat = forwardRef<SVGSVGElement, JengaIconRegularProps>((props, ref) => {
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
        d="M16 24.595V28.5"
      />
      <path
        fill={color || colorCtx || "#000000"}
        d="M10.631 19.714a1.464 1.464 0 1 0 0-2.928 1.464 1.464 0 0 0 0 2.928ZM21.369 19.714a1.464 1.464 0 1 0 0-2.928 1.464 1.464 0 0 0 0 2.928Z"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={weight || weightCtx || "2"}
        d="M16 7.024v4.881M17.952 22.643 16 24.595l-1.952-1.952M12.095 7.634v4.271M19.905 7.634v4.271"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinejoin="round"
        strokeWidth={weight || weightCtx || "2"}
        d="m4.286 6.452 4.88 2.929 1.022-.73a10 10 0 0 1 11.624 0l1.021.73 4.881-2.929V18.5c0 5.523-4.477 10-10 10h-3.428c-5.523 0-10-4.477-10-10V6.452Z"
      />

      {children || childrenCtx}
    </svg>
  );
});

Cat.displayName = "Cat";

export default Cat;
