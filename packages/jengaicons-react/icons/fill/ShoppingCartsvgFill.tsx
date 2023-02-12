import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ShoppingCartsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
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
          d="M13.716 28.283a2.519 2.519 0 1 0 0-5.037 2.519 2.519 0 0 0 0 5.037ZM23.79 28.283a2.519 2.519 0 1 0 0-5.037 2.519 2.519 0 0 0 0 5.037ZM28.041 8.431H9.434l2.738 9.582a1.66 1.66 0 0 0 1.595 1.203h9.941a1.659 1.659 0 0 0 1.596-1.203l2.738-9.582Z"
          fill={color || colorCtx || "#000000"}
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.878 4.283h1.715c.177 0 .35.059.49.167a.83.83 0 0 1 .294.435l1.16 3.88"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ShoppingCartsvgFill.displayName = "ShoppingCartsvgFill";

export default ShoppingCartsvgFill;
