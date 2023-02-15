import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Shower = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          d="M8.552 26.345a1.241 1.241 0 1 0 0-2.483 1.241 1.241 0 0 0 0 2.483ZM11.448 23.448a1.241 1.241 0 1 0 0-2.482 1.241 1.241 0 0 0 0 2.482ZM5.241 23.035a1.241 1.241 0 1 0 0-2.483 1.241 1.241 0 0 0 0 2.483ZM8.138 20.138a1.241 1.241 0 1 0 0-2.483 1.241 1.241 0 0 0 0 2.483Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M28 5.655h-2.968a.827.827 0 0 0-.585.243L21.38 8.966 8.07 11.184a.827.827 0 0 0-.45 1.402l10.14 10.139a.827.827 0 0 0 1.402-.45l2.218-13.31"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

Shower.displayName = "Shower";

export default Shower;
