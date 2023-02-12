import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const PopcornRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M11.004 13.013 13.003 28M20.996 13.013 18.998 28M26.99 11.514a4.497 4.497 0 0 0-6.606-3.972 4.484 4.484 0 0 0-8.768 0 4.496 4.496 0 0 0-6.606 3.972"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m7.977 27.921-3.57-16.255a.1.1 0 0 1 .118-.12l6.569 1.398a.1.1 0 0 0 .055-.004l4.675-1.718a.1.1 0 0 1 .066-.001l5.04 1.72a.099.099 0 0 0 .053.003l6.49-1.397a.1.1 0 0 1 .119.12l-3.76 16.255a.1.1 0 0 1-.097.078H8.075a.1.1 0 0 1-.098-.079Z"
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

PopcornRegular.displayName = "PopcornRegular";

export default PopcornRegular;
