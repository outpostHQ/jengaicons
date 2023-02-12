import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const PerspectiveFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4.96 15.533a1 1 0 1 0 0 2v-2Zm0 2h1.714v-2H4.96v2ZM28.96 17.533a1 1 0 0 0 0-2v2Zm-1.714 0h1.714v-2h-1.714v2Z"
        />
        <path
          fill={color || colorCtx || "#000000"}
          fillRule="evenodd"
          d="M7.47 10.367a1 1 0 0 0-.796.979v4.187h20.572V7.477a1 1 0 0 0-1.204-.979L7.47 10.368Zm19.776 7.166H6.674v4.187a1 1 0 0 0 .796.979l18.572 3.869a1 1 0 0 0 1.204-.98v-8.055Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

PerspectiveFill.displayName = "PerspectiveFill";

export default PerspectiveFill;
