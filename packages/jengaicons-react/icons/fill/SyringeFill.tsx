import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const SyringeFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M22.845 3.641a1 1 0 0 1 1.414 0l2.687 2.687.017.017.017.017 2.687 2.687a1 1 0 0 1-1.414 1.414l-1.997-1.996-3.092 3.092 3.799 3.8a1 1 0 0 1-1.414 1.414l-1.49-1.49-9.849 9.85a.5.5 0 0 1-.366.146l-4.413-.11-3.376 3.376a1 1 0 0 1-1.414-1.414l3.368-3.368-.11-4.43a.5.5 0 0 1 .146-.366l2.413-2.413 2.923 2.923a1 1 0 0 0 1.414-1.415l-2.923-2.922 1.74-1.74 2.923 2.922a1 1 0 0 0 1.415-1.414l-2.923-2.923 2.867-2.867-1.358-1.359a1 1 0 1 1 1.414-1.414l3.8 3.8 3.092-3.093-1.997-1.997a1 1 0 0 1 0-1.414Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

SyringeFill.displayName = "SyringeFill";

export default SyringeFill;
