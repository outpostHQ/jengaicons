import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const MapPinLineFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M18.237 27.283c2.533-2.121 7.954-7.403 7.954-13.77a9.23 9.23 0 1 0-18.462 0c0 6.367 5.42 11.649 7.954 13.77h-7.03a1 1 0 1 0 0 2h16.615a1 1 0 1 0 0-2h-7.031ZM16.96 17.206a3.692 3.692 0 1 0 0-7.385 3.692 3.692 0 0 0 0 7.385Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

MapPinLineFill.displayName = "MapPinLineFill";

export default MapPinLineFill;
