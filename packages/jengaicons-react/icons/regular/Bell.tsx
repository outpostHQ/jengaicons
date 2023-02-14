import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Bell = forwardRef<SVGSVGElement, JengaIconRegularProps>((props, ref) => {
  const { size, color, alt, children, mirrored, weight } = props;

  const {
    alt: altCtx,
    children: childrenCtx,
    color: colorCtx,
    mirrored: mirroredCtx,
    size: sizeCtx,
    weight: weightCtx,
  } = useContext(JengaIconContext as Context<JengaIconRegularProps>);

  return (
    <svg
      width={size || sizeCtx || 32}
      height={size || sizeCtx || 32}
      transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
      strokeWidth={weight || weightCtx || 2}
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
    >
      {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={weight || weightCtx || "2"}
        d="M12 23.073v.985c0 1.046.421 2.048 1.171 2.788A4.03 4.03 0 0 0 16 28a4.03 4.03 0 0 0 2.828-1.154A3.913 3.913 0 0 0 20 24.058v-.985"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinejoin="round"
        strokeWidth={weight || weightCtx || "2"}
        d="M5.126 23.073s2.566-3.65 3-6.13c.144-.828.174-1.705.122-2.596C7.96 9.41 11.056 4 16 4s8.04 5.411 7.752 10.347c-.053.891-.022 1.768.122 2.595.434 2.481 3 6.13 3 6.13H5.126Z"
      />

      {children || childrenCtx}
    </svg>
  );
});

Bell.displayName = "Bell";

export default Bell;
