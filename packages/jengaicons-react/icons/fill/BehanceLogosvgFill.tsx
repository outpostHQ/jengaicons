import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const BehanceLogosvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          strokeWidth="2"
          d="M19.73 19.198a4.615 4.615 0 0 0 7.798 3.342m-7.798-3.342a4.615 4.615 0 0 1 9.204-.5c.03.275-.198.5-.474.5h-8.73Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M20.652 10.882h7.385"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          d="M4.96 9.084c0-.027.022-.048.048-.048h6.187a3.451 3.451 0 0 1 0 6.903H5.008a.048.048 0 0 1-.048-.049V9.084Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          d="M4.96 15.996c0-.032.026-.058.058-.058h7.547a3.933 3.933 0 1 1 0 7.866H5.018a.057.057 0 0 1-.058-.056v-7.752Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

BehanceLogosvgFill.displayName = "BehanceLogosvgFill";

export default BehanceLogosvgFill;
