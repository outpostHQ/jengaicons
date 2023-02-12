import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ScissorsFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M11.53 11.04a3.36 3.36 0 1 0-1.118 1.632c.036.034.075.065.116.093l5.141 3.518-5.14 3.517c-.043.029-.081.06-.117.093a3.36 3.36 0 1 0 1.118 1.632c.043-.02.086-.046.127-.074l5.783-3.956 10.955 7.495a1 1 0 1 0 1.13-1.65L18.02 15.469a1.187 1.187 0 0 0-.033-.022l-6.33-4.332a1.004 1.004 0 0 0-.128-.075Zm18.256-3.204a1 1 0 0 1-.261 1.39l-8.12 5.556a1 1 0 0 1-1.13-1.65l8.12-5.556a1 1 0 0 1 1.39.26Z"
        fill={color || colorCtx || "#000000"}
      />

      {children || childrenCtx}
    </svg>
  );
});

ScissorsFill.displayName = "ScissorsFill";

export default ScissorsFill;
