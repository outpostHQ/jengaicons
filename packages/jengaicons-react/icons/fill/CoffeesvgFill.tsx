import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const CoffeesvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M11.422 5.206v3.692M15.114 5.206v3.692M18.806 5.206v3.692M4.96 27.36h20.308"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.879 27.36a10.156 10.156 0 0 1-5.919-9.231V12.59h20.308v5.539a10.156 10.156 0 0 1-5.919 9.231"
          fill={color || colorCtx || "#000000"}
        />
        <path
          d="M10.879 27.36a10.156 10.156 0 0 1-5.919-9.231V12.59h20.308v5.539a10.156 10.156 0 0 1-5.919 9.231"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.268 12.59a3.692 3.692 0 0 1 3.692 3.693v.923a3.693 3.693 0 0 1-3.692 3.692h-.39"
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

CoffeesvgFill.displayName = "CoffeesvgFill";

export default CoffeesvgFill;
