import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Popcorn = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M11.004 13.513 13.003 28.5M20.996 13.513 18.998 28.5M26.99 12.014a4.497 4.497 0 0 0-6.606-3.972 4.484 4.484 0 0 0-8.768 0 4.496 4.496 0 0 0-6.606 3.972"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="m7.977 28.421-3.57-16.255a.1.1 0 0 1 .118-.12l6.569 1.398a.1.1 0 0 0 .055-.004l4.675-1.718a.1.1 0 0 1 .066-.001l5.04 1.72a.099.099 0 0 0 .053.003l6.49-1.397a.1.1 0 0 1 .119.12l-3.76 16.255a.1.1 0 0 1-.097.078H8.075a.1.1 0 0 1-.098-.079Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

Popcorn.displayName = "Popcorn";

export default Popcorn;
