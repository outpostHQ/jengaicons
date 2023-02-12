import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const HouseSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m5.78 14.407 10.377-9.512a1 1 0 0 1 1.343-.008l10.63 9.519a1 1 0 0 1 .334.745v12.132a1 1 0 0 1-1 1H6.456a1 1 0 0 1-1-1v-12.14a1 1 0 0 1 .324-.736Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

HouseSimpleFill.displayName = "HouseSimpleFill";

export default HouseSimpleFill;
