import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const NumberCircleFourFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.96 28.283c6.627 0 12-5.373 12-12s-5.373-12-12-12c-6.628 0-12 5.373-12 12s5.372 12 12 12Zm2.072-14.718a1 1 0 0 1 1 1v7.718a1 1 0 1 1-2 0v-2.928h-4.834a1 1 0 0 1-.941-1.337l2.897-8.073a1 1 0 1 1 1.883.676l-2.417 6.734h3.412v-2.79a1 1 0 0 1 1-1Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

NumberCircleFourFill.displayName = "NumberCircleFourFill";

export default NumberCircleFourFill;
