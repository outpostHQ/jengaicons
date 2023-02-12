import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const BathtubsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M10.96 23.569v2.571M22.96 23.569v2.571"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M5.46 14.14a.5.5 0 0 0-.5.5v3.929a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V14.64a.5.5 0 0 0-.5-.5h-23Zm17.84.498h-4.108v2.451H23.3v-2.45Z"
          fill={color || colorCtx || "#000000"}
        />
        <path
          d="M9.246 14.14V8.426a2 2 0 0 1 2-2h.285a2 2 0 0 1 2 2v.143"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

BathtubsvgFill.displayName = "BathtubsvgFill";

export default BathtubsvgFill;
