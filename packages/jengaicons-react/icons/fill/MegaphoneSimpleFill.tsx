import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const MegaphoneSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4.96 7.448a1 1 0 0 1 1.28-.96l13.738 4.005c-.015.069-.023.14-.023.213v9.78h2v4.965h1.998v-5.549l-1.998.583V11.07l6.285 1.832a1 1 0 0 1 .72.96v3.83a1 1 0 0 1-.72.96l-2.287.667v7.132a1 1 0 0 1-1 1h-3.998a1 1 0 0 1-1-1v-5.383L6.24 25.067a1 1 0 0 1-1.28-.96V7.447Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

MegaphoneSimpleFill.displayName = "MegaphoneSimpleFill";

export default MegaphoneSimpleFill;
