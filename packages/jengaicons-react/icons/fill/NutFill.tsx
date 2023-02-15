import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const NutFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M17.46 4.572a1 1 0 0 0-1 0L7.067 9.994a1 1 0 0 0-.5.866v10.846a1 1 0 0 0 .5.866l9.393 5.422a1 1 0 0 0 1 0l9.392-5.422a1 1 0 0 0 .5-.866V10.86a1 1 0 0 0-.5-.866L17.46 4.572Zm4 11.711a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

NutFill.displayName = "NutFill";

export default NutFill;
