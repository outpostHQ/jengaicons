import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const AndroidLogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4.96 23.809V21.17c0-6.632 5.326-12.107 11.958-12.13a12 12 0 0 1 12.042 12v2.769a.923.923 0 0 1-.923.923H5.883a.923.923 0 0 1-.923-.923Zm16.154-2.77a1.385 1.385 0 1 0 0-2.768 1.385 1.385 0 0 0 0 2.769Zm-6.923-1.384a1.385 1.385 0 1 1-2.77 0 1.385 1.385 0 0 1 2.77 0Z"
          clipRule="evenodd"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m5.883 8.117 3.586 3.585M28.037 8.117l-3.565 3.565"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

AndroidLogoFill.displayName = "AndroidLogoFill";

export default AndroidLogoFill;
