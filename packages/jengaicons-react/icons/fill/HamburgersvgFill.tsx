import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const HamburgersvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4.96 16.744h24"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m5.378 22.12 4.447-2.017a.1.1 0 0 1 .08-.001l4.824 2.001a.1.1 0 0 0 .08 0l4.459-2a.1.1 0 0 1 .08 0l4.615 2a.1.1 0 0 0 .08-.001l4.5-2.017"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12.73 26.898h8.624a4.837 4.837 0 0 0 4.837-4.837.484.484 0 0 0-.656-.452l-1.384.527a.5.5 0 0 1-.376-.008l-4.388-1.89a.5.5 0 0 0-.412.007l-3.958 1.868a.5.5 0 0 1-.406.01l-4.492-1.88a.5.5 0 0 0-.437.024l-1.697.95a.5.5 0 0 0-.256.436v.245a5 5 0 0 0 5 5Z"
          fill={color || colorCtx || "#000000"}
        />
        <path
          d="M12.73 26.898h8.624a4.837 4.837 0 0 0 4.837-4.837.484.484 0 0 0-.656-.452l-1.384.527a.5.5 0 0 1-.376-.008l-4.388-1.89a.5.5 0 0 0-.412.007l-3.958 1.868a.5.5 0 0 1-.406.01l-4.492-1.88a.5.5 0 0 0-.437.024l-1.697.95a.5.5 0 0 0-.256.436v.245a5 5 0 0 0 5 5Z"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M14.248 5.667h5.424a7.348 7.348 0 0 1 7.348 7.348c0 .02-.017.037-.037.037H6.937a.037.037 0 0 1-.036-.037 7.348 7.348 0 0 1 7.348-7.348Z"
          fill={color || colorCtx || "#000000"}
        />
        <path
          d="M14.248 5.667h5.424a7.348 7.348 0 0 1 7.348 7.348c0 .02-.017.037-.037.037H6.937a.037.037 0 0 1-.036-.037 7.348 7.348 0 0 1 7.348-7.348Z"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

HamburgersvgFill.displayName = "HamburgersvgFill";

export default HamburgersvgFill;
