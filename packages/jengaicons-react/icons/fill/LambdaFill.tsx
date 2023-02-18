import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const LambdaFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
  const { size, color, alt, children, mirrored, style } = props;

  const {
    alt: altCtx,
    children: childrenCtx,
    color: colorCtx,
    mirrored: mirroredCtx,
    size: sizeCtx,
    style: styleCtx,
  } = useContext(JengaIconContext);

  return (
    <svg
      width={size || sizeCtx || 32}
      height={size || sizeCtx || 32}
      transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
      ref={ref}
      style={{
        ...styleCtx,
        ...style,
      }}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
    >
      {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

      <path
        fill={color || colorCtx || "#000000"}
        fillRule="evenodd"
        d="M9.593 4.283a1 1 0 1 0 0 2h4.102l2.536 6.276L6.112 28.753a1 1 0 0 0 1.696 1.06l9.35-14.961 5.922 14.66a1 1 0 0 0 1.232.577l4.926-1.575a1 1 0 0 0-.61-1.905L24.588 27.9l-9.29-22.993a1 1 0 0 0-.927-.625H9.593Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

LambdaFill.displayName = "LambdaFill";

export default LambdaFill;
