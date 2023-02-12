import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const BoundingBoxFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M8.233 21.738v-10.91M22.415 25.01h-10.91M25.687 10.828v10.91M11.505 7.556h10.91"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="4.96"
          y="4.283"
          width="6.545"
          height="6.545"
          rx=".5"
          fill={color || colorCtx || "#000000"}
        />
        <rect
          x="4.96"
          y="21.737"
          width="6.545"
          height="6.545"
          rx=".5"
          fill={color || colorCtx || "#000000"}
        />
        <rect
          x="22.415"
          y="4.283"
          width="6.545"
          height="6.545"
          rx=".5"
          fill={color || colorCtx || "#000000"}
        />
        <rect
          x="22.415"
          y="21.737"
          width="6.545"
          height="6.545"
          rx=".5"
          fill={color || colorCtx || "#000000"}
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

BoundingBoxFill.displayName = "BoundingBoxFill";

export default BoundingBoxFill;
