import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const LinkFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M21.64 8.052a3.55 3.55 0 0 1 2.51 6.061l-2.925 2.925a3.55 3.55 0 0 1-5.02 0 1 1 0 0 0-1.414 1.414 5.549 5.549 0 0 0 7.848 0l2.924-2.924a5.549 5.549 0 1 0-7.848-7.849l-2.047 2.047a1 1 0 1 0 1.414 1.415l2.047-2.048a3.55 3.55 0 0 1 2.511-1.04Zm-7.793 6.706a3.55 3.55 0 0 1 3.868.77 1 1 0 0 0 1.414-1.415 5.55 5.55 0 0 0-7.848 0l-2.925 2.925a5.55 5.55 0 1 0 7.848 7.849l2.048-2.048a1 1 0 0 0-1.414-1.414l-2.048 2.047a3.55 3.55 0 1 1-5.02-5.02l2.925-2.924c.33-.33.72-.591 1.152-.77Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

LinkFill.displayName = "LinkFill";

export default LinkFill;
