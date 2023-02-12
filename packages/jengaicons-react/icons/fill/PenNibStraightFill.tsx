import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const PenNibStraightFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M12.3 3.283a1 1 0 0 0-1 1v5.11l-2.938 5.615a1 1 0 0 0 .073 1.046l7.753 10.83v-8.287a3.108 3.108 0 0 1 1-6.047 3.106 3.106 0 0 1 1 6.047v8.216l7.342-10.799a1 1 0 0 0 .087-.969L23.109 9.41V4.283a1 1 0 0 0-1-1h-9.81Zm8.809 6.11v-4.11h-7.81v4.11h7.81Zm-5.027 6.263a1.106 1.106 0 1 1 2.212 0 1.106 1.106 0 0 1-2.212 0Z"
          fill={color || colorCtx || "#000000"}
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

PenNibStraightFill.displayName = "PenNibStraightFill";

export default PenNibStraightFill;
