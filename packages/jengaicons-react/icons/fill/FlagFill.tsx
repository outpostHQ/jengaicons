import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FlagFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M6.172 5.547a.999.999 0 0 0-1.825.565v22.17a1 1 0 1 0 2 0V21.28c3.812-2.246 7.212-.788 10.613.67 3.695 1.583 7.39 3.167 11.614 0V6.111c-4.223 3.167-7.919 1.583-11.614 0-3.452-1.48-6.905-2.96-10.788-.565Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

FlagFill.displayName = "FlagFill";

export default FlagFill;
