import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const BehanceLogoRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M18.77 18.773a4.615 4.615 0 0 0 7.798 3.343m-7.799-3.343a4.615 4.615 0 0 1 9.204-.499c.03.275-.197.5-.473.5h-8.73Z"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M19.692 10.457h7.385"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 8.66c0-.027.022-.049.048-.049h6.187a3.451 3.451 0 0 1 0 6.903H4.048A.048.048 0 0 1 4 15.466V8.659ZM4 15.571c0-.031.026-.057.057-.057h7.548a3.933 3.933 0 1 1 0 7.866H4.057A.057.057 0 0 1 4 23.323v-7.752Z"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

BehanceLogoRegular.displayName = "BehanceLogoRegular";

export default BehanceLogoRegular;
