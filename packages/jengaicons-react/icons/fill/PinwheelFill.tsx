import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const PinwheelFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M13.378 4.669a.03.03 0 0 1 .018-.038 5.934 5.934 0 0 1 7.516 3.735l.066.197c.712 2.12.16 4.36-1.251 5.901l8.203-2.792a.03.03 0 0 1 .038.018 5.934 5.934 0 0 1-3.705 7.53l-.197.067a5.908 5.908 0 0 1-3.79.012l7.239 7.24a1 1 0 0 1-1.414 1.414l-7.827-7.827 2.12 6.307a.03.03 0 0 1-.018.037 5.934 5.934 0 0 1-7.516-3.733l-.066-.197a5.935 5.935 0 0 1 1.529-6.188l-8.337 2.822a.03.03 0 0 1-.037-.018 5.934 5.934 0 0 1 3.718-7.524l.196-.066a5.936 5.936 0 0 1 6.431 1.782l-2.916-8.68Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

PinwheelFill.displayName = "PinwheelFill";

export default PinwheelFill;
