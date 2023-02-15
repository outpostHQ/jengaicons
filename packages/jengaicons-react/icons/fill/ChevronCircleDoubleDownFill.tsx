import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ChevronCircleDoubleDownFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
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
          d="M16.96 28.283c6.628 0 12-5.373 12-12s-5.372-12-12-12c-6.627 0-12 5.373-12 12s5.373 12 12 12Zm-4.95-11.829a1 1 0 0 1 1.415 0l3.535 3.536 3.536-3.535a1 1 0 0 1 1.414 1.414l-4.243 4.242a1 1 0 0 1-1.414 0L12.01 17.87a1 1 0 0 1 0-1.415Zm1.415-6a1 1 0 0 0-1.415 1.415l4.243 4.242a1 1 0 0 0 1.414 0l4.243-4.242a1 1 0 0 0-1.414-1.415L16.96 13.99l-3.535-3.536Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ChevronCircleDoubleDownFill.displayName = "ChevronCircleDoubleDownFill";

export default ChevronCircleDoubleDownFill;
