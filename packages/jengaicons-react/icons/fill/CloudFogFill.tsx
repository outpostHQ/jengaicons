import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const CloudFogFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M10.206 9.807a5.762 5.762 0 0 1 2.422.093c.594-1.16 1.751-2.801 2.81-3.564a8.23 8.23 0 0 1 11.396 11.615c-.42.541-.894 1.048-1.362 1.497-1.34 1.288-3.197 1.795-5.055 1.795h-9.221a5.762 5.762 0 0 1-.99-11.436Zm.034 14.136a1 1 0 0 0 0 2H16a1 1 0 1 0 0-2h-5.76Zm10.56 0a1 1 0 1 0 0 2h2.88a1 1 0 1 0 0-2H20.8Zm-7.72 4.84a1 1 0 0 1 1-1h6.72a1 1 0 1 1 0 2h-6.72a1 1 0 0 1-1-1Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

CloudFogFill.displayName = "CloudFogFill";

export default CloudFogFill;
