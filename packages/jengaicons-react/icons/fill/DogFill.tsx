import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const DogFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        fillRule="evenodd"
        d="M14.854 6.438 8.348 4.782a.5.5 0 0 0-.61.37L4.631 18.487c-.114.491.487.824.842.466l.705-.712v4.74a6 6 0 0 0 6 6h9.563a6 6 0 0 0 6-6v-4.85l.78.825c.343.364.949.052.853-.44l-2.597-13.34a.5.5 0 0 0-.614-.388l-6.488 1.651h-4.822Zm1.037 2L8.18 16.222v6.758a4 4 0 0 0 4 4h3.781v-1.521l-1.663-1.663a1 1 0 0 1 1.414-1.414l1.25 1.249 1.249-1.25a1 1 0 1 1 1.414 1.415l-1.664 1.663v1.52h3.782a4 4 0 0 0 4-4v-6.823c0-.044.003-.088.008-.131l-7.174-7.587h-2.685Zm-1.865 10.25a1.467 1.467 0 1 1-2.935 0 1.467 1.467 0 0 1 2.935 0Zm7.336 1.466a1.467 1.467 0 1 0 0-2.934 1.467 1.467 0 0 0 0 2.934Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

DogFill.displayName = "DogFill";

export default DogFill;
