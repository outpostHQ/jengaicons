import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const DotsSixFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M23.421 21.683a2.77 2.77 0 1 1 5.539 0 2.77 2.77 0 0 1-5.539 0Zm-9.23 0a2.77 2.77 0 1 1 5.538 0 2.77 2.77 0 0 1-5.539 0Zm-6.462-2.77a2.77 2.77 0 1 0 0 5.539 2.77 2.77 0 0 0 0-5.538Zm15.692-8.03a2.77 2.77 0 1 1 5.539 0 2.77 2.77 0 0 1-5.539 0Zm-9.23 0a2.77 2.77 0 1 1 5.538 0 2.77 2.77 0 0 1-5.539 0Zm-6.462-2.77a2.77 2.77 0 1 0 0 5.54 2.77 2.77 0 0 0 0-5.54Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

DotsSixFill.displayName = "DotsSixFill";

export default DotsSixFill;
