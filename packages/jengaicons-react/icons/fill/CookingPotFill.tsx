import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const CookingPotFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M13.76 6.683v3.2M16.96 6.683v3.2M20.16 6.683v3.2M28.96 14.683l-3.2 2.4M4.96 14.683l3.2 2.4"
        />
        <path
          fill={color || colorCtx || "#000000"}
          d="M8.16 13.083h17.6v10.8a2 2 0 0 1-2 2h-13.6a2 2 0 0 1-2-2v-10.8Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8.16 13.083h17.6v10.8a2 2 0 0 1-2 2h-13.6a2 2 0 0 1-2-2v-10.8Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

CookingPotFill.displayName = "CookingPotFill";

export default CookingPotFill;
