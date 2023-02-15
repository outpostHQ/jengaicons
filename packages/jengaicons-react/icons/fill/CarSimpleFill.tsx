import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const CarSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M24.635 5.783a.5.5 0 0 1 .457.297l3.868 8.703v11.5a.5.5 0 0 1-.5.5h-4.22a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 0-.5-.5H10.62a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-.5.5H5.46a.5.5 0 0 1-.5-.5v-11.5L8.828 6.08a.5.5 0 0 1 .457-.297h15.35ZM9.653 13.616a1.167 1.167 0 0 0 0 2.334h14.614a1.167 1.167 0 0 0 0-2.334H9.653Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

CarSimpleFill.displayName = "CarSimpleFill";

export default CarSimpleFill;
