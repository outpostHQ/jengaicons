import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const NoteFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
    >
      {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

      <path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M5.96 4.283h22a1 1 0 0 1 1 1v15.524a1 1 0 0 1-.358.767l-7.738 6.476a1 1 0 0 1-.642.233H5.96a1 1 0 0 1-1-1v-22a1 1 0 0 1 1-1Zm14.358 17.665v4.895l7.08-5.895h-6.08a1 1 0 0 0-1 1ZM12.596 10.92a1 1 0 1 0 0 2h8.727a1 1 0 0 0 0-2h-8.727Zm0 4.364a1 1 0 1 0 0 2h8.727a1 1 0 0 0 0-2h-8.727Zm-1 5.364a1 1 0 0 1 1-1h4.364a1 1 0 0 1 0 2h-4.364a1 1 0 0 1-1-1Z"
        fill={color || colorCtx || "#000000"}
      />

      {children || childrenCtx}
    </svg>
  );
});

NoteFill.displayName = "NoteFill";

export default NoteFill;
