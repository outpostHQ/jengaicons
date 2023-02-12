import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const AndroidLogoRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M20.154 20.615a1.385 1.385 0 1 0 0-2.769 1.385 1.385 0 0 0 0 2.77ZM11.846 20.615a1.385 1.385 0 1 0 0-2.769 1.385 1.385 0 0 0 0 2.77Z"
          fill={color || colorCtx || "#000000"}
        />
        <path
          d="M4 23.385v-2.64c0-6.631 5.325-12.107 11.958-12.13a12 12 0 0 1 12.042 12v2.77a.923.923 0 0 1-.923.923H4.923A.923.923 0 0 1 4 23.385ZM4.923 7.692l3.585 3.586M27.077 7.692l-3.565 3.565"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

AndroidLogoRegular.displayName = "AndroidLogoRegular";

export default AndroidLogoRegular;
