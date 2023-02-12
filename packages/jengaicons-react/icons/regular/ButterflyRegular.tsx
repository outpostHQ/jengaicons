import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ButterflyRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 24.432V13.278a10 10 0 0 0-3.92-7.94L10.985 4.5"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 24.432V13.278a10 10 0 0 1 3.92-7.94l1.095-.838"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 14.275a5.519 5.519 0 1 1 11.037 0 5.519 5.519 0 0 1-5.518 5.52H16v-5.52Z"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M16 14.275a5.519 5.519 0 1 0-11.037 0 5.519 5.519 0 0 0 5.518 5.52H16v-5.52Z"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M16 24.147a4.353 4.353 0 1 0 8.706 0 4.353 4.353 0 0 0-4.353-4.353H16v4.353ZM16 24.147a4.353 4.353 0 0 1-8.706 0 4.353 4.353 0 0 1 4.353-4.353H16v4.353Z"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ButterflyRegular.displayName = "ButterflyRegular";

export default ButterflyRegular;
