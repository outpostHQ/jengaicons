import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FireSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M10.824 10.501a.494.494 0 0 0-.69.142C8.458 13.256 7.13 16.2 7.13 18.953a9.83 9.83 0 0 0 19.659 0c0-5.792-3.817-10.311-7.132-13.67a.496.496 0 0 0-.802.138l-3.52 7.395a.5.5 0 0 1-.728.201l-3.784-2.516Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

FireSimpleFill.displayName = "FireSimpleFill";

export default FireSimpleFill;
