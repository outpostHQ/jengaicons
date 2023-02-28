import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const ToiletPaper = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          d="M8.615 16.462a1.385 1.385 0 1 0 0-2.77 1.385 1.385 0 0 0 0 2.77Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M8.615 24.308c2.55 0 4.616-4.133 4.616-9.231s-2.067-9.23-4.616-9.23C6.066 5.846 4 9.978 4 15.076c0 5.098 2.066 9.23 4.615 9.23Z"
        />
        <path
          fill={color || colorCtx || "#000000"}
          d="M28 26.154v1a1 1 0 0 0 1-1h-1Zm-14.77 0h-1a1 1 0 0 0 1 1v-1ZM8.572 6.846h11.43v-2H8.57v2Zm18.43 7v12.308h2V13.846h-2Zm1 11.308H13.23v2H28v-2Zm-13.77 1V14.319h-2v11.835h2Zm0-11.835c0-2.553-.602-4.847-1.567-6.537-.938-1.642-2.369-2.936-4.093-2.936v2c.662 0 1.562.537 2.356 1.929.768 1.344 1.304 3.286 1.304 5.544h2ZM20 6.846a7 7 0 0 1 7 7h2a9 9 0 0 0-9-9v2Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeDasharray="4 4"
          strokeLinecap="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M13.292 15.002h14.536"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ToiletPaper.displayName = "ToiletPaper";

export default ToiletPaper;
