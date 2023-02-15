import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const CloudCheckFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M9.924 12.943a6.003 6.003 0 0 1 2.523.097c.62-1.21 1.825-2.918 2.927-3.712a8.574 8.574 0 0 1 11.871 12.1c-.438.563-.931 1.09-1.419 1.558-1.396 1.341-3.329 1.87-5.265 1.87h-9.605a6.003 6.003 0 0 1-1.032-11.913Zm15.04 3.016a1 1 0 0 0-1.415-1.414l-4.355 4.354-1.823-1.823a1 1 0 0 0-1.414 1.414l2.53 2.53a1 1 0 0 0 1.415 0l5.061-5.06Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

CloudCheckFill.displayName = "CloudCheckFill";

export default CloudCheckFill;
