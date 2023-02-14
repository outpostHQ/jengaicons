import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context, SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const AndroidLogo = forwardRef<SVGSVGElement, JengaIconRegularProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, weight } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      weight: weightCtx,
    } = useContext(JengaIconContext as Context<JengaIconRegularProps>);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        strokeWidth={weight || weightCtx || 2}
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          fill={color || colorCtx || "#000000"}
          d="M20.154 20.615a1.385 1.385 0 1 0 0-2.769 1.385 1.385 0 0 0 0 2.77ZM11.846 20.615a1.385 1.385 0 1 0 0-2.769 1.385 1.385 0 0 0 0 2.77Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M4 23.385v-2.64c0-6.631 5.325-12.107 11.958-12.13a12 12 0 0 1 12.042 12v2.77a.923.923 0 0 1-.923.923H4.923A.923.923 0 0 1 4 23.385ZM4.923 7.692l3.585 3.586M27.077 7.692l-3.565 3.565"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

AndroidLogo.displayName = "AndroidLogo";

export default AndroidLogo;
