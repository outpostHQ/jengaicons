import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ToteFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M12.303 13.954v-3.726a4.657 4.657 0 1 1 9.314 0v3.726"
      />
      <path
        fill={color || colorCtx || "#000000"}
        stroke={color || colorCtx || "#000000"}
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6.823 26.995h20.274l1.863-16.767h-24l1.863 16.767Z"
      />
      <path
        fill={color || colorCtx || "#000000"}
        d="M22.514 10.228v-1h-2v1h2Zm-2 4.446a1 1 0 1 0 2 0h-2Zm0-4.446v4.446h2v-4.446h-2ZM11.406 14.674a1 1 0 0 0 2 0h-2Zm2-4.446v-1h-2v1h2Zm0 4.446v-4.446h-2v4.446h2Z"
      />

      {children || childrenCtx}
    </svg>
  );
});

ToteFill.displayName = "ToteFill";

export default ToteFill;
