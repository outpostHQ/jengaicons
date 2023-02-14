import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const NumberFiveFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11.694 24.195c1.078 1.27 2.757 2.088 4.643 2.088 3.253 0 5.89-2.43 5.89-5.43 0-2.998-2.637-5.429-5.89-5.429a6.174 6.174 0 0 0-3.773 1.26c-.218.168-.422.35-.611.544l1.895-10.945h8.379"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

NumberFiveFill.displayName = "NumberFiveFill";

export default NumberFiveFill;
