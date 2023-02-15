import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const HeartStraightBreakFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fill={color || colorCtx || "#000000"}
          fillRule="evenodd"
          d="m16.122 8.846-.638-.644c-2.315-2.303-6.1-2.64-8.52-.463a6.019 6.019 0 0 0-.243 8.739l9.62 9.619a.938.938 0 0 0 1.319 0l9.375-9.376c2.304-2.315 2.64-6.1.463-8.52a6.018 6.018 0 0 0-7.397-1.252l-3.625 4.72 3.083 3.083a1 1 0 0 1 0 1.415l-1.852 1.852a1 1 0 0 1-1.414-1.415l1.145-1.144-2.997-2.997a1 1 0 0 1-.086-1.317l1.767-2.3Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

HeartStraightBreakFill.displayName = "HeartStraightBreakFill";

export default HeartStraightBreakFill;
