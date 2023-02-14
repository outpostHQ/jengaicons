import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const SunFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16.96 3.783a1 1 0 0 1 1 1v2.143a1 1 0 0 1-2 0V4.783a1 1 0 0 1 1-1Zm0 19.429a6.429 6.429 0 1 0 0-12.857 6.429 6.429 0 0 0 0 12.857ZM9.18 7.59a1 1 0 1 0-1.414 1.414l1.51 1.511a1 1 0 0 0 1.415-1.414l-1.51-1.51ZM3.96 16.783a1 1 0 0 1 1-1h2.143a1 1 0 1 1 0 2H4.96a1 1 0 0 1-1-1Zm6.732 7.682a1 1 0 1 0-1.414-1.414l-1.511 1.51a1 1 0 1 0 1.414 1.415l1.51-1.511Zm6.268 1.175a1 1 0 0 1 1 1v2.143a1 1 0 0 1-2 0V26.64a1 1 0 0 1 1-1Zm7.682-2.59a1 1 0 0 0-1.414 1.415l1.51 1.51a1 1 0 1 0 1.415-1.414l-1.51-1.51Zm1.175-6.267a1 1 0 0 1 1-1h2.143a1 1 0 0 1 0 2h-2.143a1 1 0 0 1-1-1Zm.336-7.779a1 1 0 0 0-1.414-1.414l-1.511 1.511a1 1 0 1 0 1.414 1.414l1.51-1.51Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

SunFill.displayName = "SunFill";

export default SunFill;
