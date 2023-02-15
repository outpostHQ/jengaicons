import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const BicycleFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M7.945 9.497a1 1 0 0 1 1-1h3.106a1 1 0 0 1 .879.522l1.455 2.68h5.085l-.975-1.65a1 1 0 0 1 .861-1.509H25a1 1 0 0 1 1 1v1.53a1 1 0 1 1-2 0v-.53h-2.891l2.224 3.766-1.722 1.017-.96-1.624h-5.18l2.709 4.988a1 1 0 0 1-1.758.954l-2.784-5.127-.912 1.198-1.582-1.204-3.022 4.015a1 1 0 1 0 1.598 1.204l3.023-4.018a5.06 5.06 0 1 1-1.608-1.21l1.456-1.912-1.135-2.09h-2.51a1 1 0 0 1-1-1Zm13.667 5.835a5.018 5.018 0 1 0 1.725-1.012l2.524 4.293a1 1 0 1 1-1.723 1.015l-2.526-4.296Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

BicycleFill.displayName = "BicycleFill";

export default BicycleFill;
