import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const PackageFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="m7.272 9.673 9.731 5.43h.015c.03 0 .06 0 .09.003l3.287-1.89-9.921-5.335-3.202 1.792Zm14.195 5.233v4.13a1 1 0 1 0 2 0v-5.28l4.154-2.388v10.915l-9.603 5.373V16.89l3.45-1.984Zm.969-2.864-9.893-5.32 4.355-2.436 9.643 5.396-4.105 2.36Zm-16.26-.69 9.842 5.49V27.79l-9.842-5.507V11.35Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

PackageFill.displayName = "PackageFill";

export default PackageFill;
