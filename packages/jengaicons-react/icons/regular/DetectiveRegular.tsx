import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const DetectiveRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M9.76 26.604a3.36 3.36 0 1 0 0-6.72 3.36 3.36 0 0 0 0 6.72ZM22.24 26.604a3.36 3.36 0 1 0 0-6.72 3.36 3.36 0 0 0 0 6.72ZM13.12 23.244h5.76M4 16.044h24"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.047 12.545v3.5h17.906v-2.969c0-4.288-3.5-8.33-6.08-4.906-.745.987-1.508 1.87-2.873 1.87-1.526 0-2.371-1.16-3.26-2.32-2.447-3.197-5.693.8-5.693 4.825Z"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

DetectiveRegular.displayName = "DetectiveRegular";

export default DetectiveRegular;
