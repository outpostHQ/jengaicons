import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FlowArrowRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M7 24.461a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 21.461h.857A5.143 5.143 0 0 0 16 16.318v0a5.143 5.143 0 0 1 5.143-5.143H28"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24.363 7.539 28 11.175l-3.637 3.637"
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

FlowArrowRegular.displayName = "FlowArrowRegular";

export default FlowArrowRegular;
