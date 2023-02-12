import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const CirclesThreePlusRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M8.91 13.818A4.91 4.91 0 1 0 8.908 4a4.91 4.91 0 0 0 0 9.818ZM23.091 13.818a4.91 4.91 0 1 0 0-9.818 4.91 4.91 0 0 0 0 9.818ZM8.91 28a4.909 4.909 0 1 0 0-9.818 4.909 4.909 0 0 0 0 9.818ZM23.09 19.273v7.636M26.91 23.09h-7.637"
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

CirclesThreePlusRegular.displayName = "CirclesThreePlusRegular";

export default CirclesThreePlusRegular;
