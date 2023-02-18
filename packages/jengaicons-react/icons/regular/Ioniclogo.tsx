import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Ioniclogo = forwardRef<SVGSVGElement, JengaIconRegularProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, weight, style } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      weight: weightCtx,
      style: styleCtx,
    } = useContext(JengaIconContext as Context<JengaIconRegularProps>);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        strokeWidth={weight || weightCtx || 2}
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
          stroke={color || colorCtx || "#000000"}
          d="M16.012 5.481h.002c1.7 0 3.31.362 4.83 1.066-.285.29-.528.621-.72.983a10.2 10.2 0 0 0-4.096-.859c-5.693 0-10.31 4.632-10.31 10.31 0 5.678 4.602 10.31 10.296 10.31 5.694 0 10.31-4.631 10.31-10.31a10.01 10.01 0 0 0-.67-3.647c.37-.171.709-.394 1.01-.659.56 1.375.836 2.82.836 4.278 0 6.335-5.165 11.5-11.5 11.5s-11.5-5.165-11.5-11.5S9.664 5.454 16.012 5.481Zm.002 6.54c2.723 0 4.96 2.222 4.974 4.976a4.967 4.967 0 0 1-4.974 4.973 4.967 4.967 0 0 1-4.974-4.974 4.976 4.976 0 0 1 4.974-4.974Zm7.834-4.52a2.002 2.002 0 1 1 0 4.004 2.002 2.002 0 0 1 0-4.005Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

Ioniclogo.displayName = "Ioniclogo";

export default Ioniclogo;
