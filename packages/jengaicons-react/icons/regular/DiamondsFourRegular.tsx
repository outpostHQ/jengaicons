import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const DiamondsFourRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinejoin="round"
          d="M11.353 8.605 15.958 4l4.605 4.605-4.605 4.605zM11.353 23.395l4.604-4.605 4.605 4.605L15.957 28zM18.79 16.036l4.605-4.605L28 16.036l-4.605 4.605zM4 16.036l4.604-4.605 4.605 4.605-4.605 4.605z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

DiamondsFourRegular.displayName = "DiamondsFourRegular";

export default DiamondsFourRegular;
