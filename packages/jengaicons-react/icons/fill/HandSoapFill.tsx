import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const HandSoapFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M15.96 5.283h-1.777a1 1 0 1 1 0-2h9.447a1 1 0 0 1 1 1v2.37a1 1 0 0 1-2 0v-1.37h-4.67v3.764h3.77a1 1 0 0 1 1 1v3.809h2.848a1 1 0 0 1 1 1v12.427a1 1 0 0 1-1 1H8.342a1 1 0 0 1-1-1V14.856a1 1 0 0 1 1-1h2.847v-3.81a1 1 0 0 1 1-1h3.771V5.284Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

HandSoapFill.displayName = "HandSoapFill";

export default HandSoapFill;
