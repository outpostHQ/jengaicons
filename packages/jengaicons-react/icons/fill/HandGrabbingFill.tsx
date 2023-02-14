import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const HandGrabbingFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M27.649 7.703c-.489-.3-1.073-.418-1.689-.418a2.5 2.5 0 0 0-2.5 2.5v4.894a.5.5 0 0 1-1 0V8.283a2.5 2.5 0 0 0-5 0v6.343a.5.5 0 1 1-1 0V8.283a2.5 2.5 0 0 0-5 0v8a.5.5 0 0 1-1 0v-4.6h-1.9a3.6 3.6 0 0 0-3.6 3.6v.9c0 6.703 4.145 12.6 12 12.6 7.342 0 12-5.243 12-11.947v-5.02l-.062-2.03c-.097-.556-.27-1-.5-1.35a3.016 3.016 0 0 0-.749-.733Zm-7.675-2.92a3.03 3.03 0 0 1-.005 0h.005Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

HandGrabbingFill.displayName = "HandGrabbingFill";

export default HandGrabbingFill;
