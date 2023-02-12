import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const CookingPotsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M13.76 6.683v3.2M16.96 6.683v3.2M20.16 6.683v3.2M28.96 14.683l-3.2 2.4M4.96 14.683l3.2 2.4"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.16 13.083h17.6v10.8a2 2 0 0 1-2 2h-13.6a2 2 0 0 1-2-2v-10.8Z"
          fill={color || colorCtx || "#000000"}
        />
        <path
          d="M8.16 13.083h17.6v10.8a2 2 0 0 1-2 2h-13.6a2 2 0 0 1-2-2v-10.8Z"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

CookingPotsvgFill.displayName = "CookingPotsvgFill";

export default CookingPotsvgFill;
