import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const CampfireFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        fillRule="evenodd"
        d="M23.46 14.283a6.5 6.5 0 0 1-6.5 6.5 3 3 0 0 0 3-3c0-2.2-1.614-3.863-2.475-4.593a.803.803 0 0 0-1.05 0c-.861.73-2.475 2.392-2.475 4.593a3 3 0 0 0 3 3 6.5 6.5 0 0 1-6.5-6.5c0-4.557 4.462-8.084 5.992-9.16a.874.874 0 0 1 1.016 0c1.53 1.076 5.992 4.603 5.992 9.16ZM5.007 21.48a1 1 0 0 1 1.256-.65l10.697 3.404 10.697-3.404a1 1 0 1 1 .606 1.906l-8.005 2.547 8.005 2.547a1 1 0 1 1-.607 1.906L16.96 26.332 6.263 29.736a1 1 0 1 1-.606-1.906l8.005-2.547-8.005-2.547a1 1 0 0 1-.65-1.256Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

CampfireFill.displayName = "CampfireFill";

export default CampfireFill;
