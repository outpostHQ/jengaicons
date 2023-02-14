import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ArrowCircleDownRightFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M20.495 13.819v6h-6M13.424 12.747l7.071 7.071"
        />
        <path
          fill={color || colorCtx || "#000000"}
          fillRule="evenodd"
          d="M28.96 16.283c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12 0-6.628 5.372-12 12-12 6.627 0 12 5.372 12 12Zm-8.465-3.465a1 1 0 0 0-1 1v3.586l-5.364-5.364a1 1 0 0 0-1.414 1.415l5.364 5.363h-3.586a1 1 0 1 0 0 2h5.993a1.014 1.014 0 0 0 .348-.059.998.998 0 0 0 .66-.947v-5.994a1 1 0 0 0-1-1Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ArrowCircleDownRightFill.displayName = "ArrowCircleDownRightFill";

export default ArrowCircleDownRightFill;
