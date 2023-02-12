import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const SunglassesRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28 18H4M21 18l5.925 5.925M6 18l5.925 5.925"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.117 6.5H9a5 5 0 0 0-5 5v9.675M22.883 6.5H23a5 5 0 0 1 5 5v9.675"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4 18.357c0-.197.16-.357.357-.357h8.286c.197 0 .357.16.357.357V21a4.5 4.5 0 1 1-9 0v-2.643ZM19 18.357c0-.197.16-.357.357-.357h8.286c.197 0 .357.16.357.357V21a4.5 4.5 0 1 1-9 0v-2.643Z"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

SunglassesRegular.displayName = "SunglassesRegular";

export default SunglassesRegular;
