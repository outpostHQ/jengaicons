import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const BroadcastRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16 19.427a3.427 3.427 0 1 0 0-6.854 3.427 3.427 0 0 0 0 6.854ZM10.547 21.453a7.705 7.705 0 0 1 0-10.906M21.453 10.547a7.706 7.706 0 0 1 0 10.906M7.518 24.482a11.985 11.985 0 0 1 0-16.964M24.482 7.518a11.986 11.986 0 0 1 0 16.964"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

BroadcastRegular.displayName = "BroadcastRegular";

export default BroadcastRegular;
