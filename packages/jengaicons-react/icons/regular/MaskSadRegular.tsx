import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const MaskSadRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M18.262 14a3 3 0 0 0 4.475 0M9.262 14a3 3 0 0 0 4.475 0M19.313 22a5.987 5.987 0 0 0-6.625 0"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.848 13.29c-.3-3.385-.129-7.183-.042-8.657a.5.5 0 0 1 .65-.442c9.022 2.731 18.044 1.065 21.571-.163.054-.02.104-.011.124.042.108.287.346 1.75-.045 9.22C26.62 22.58 23.397 28 15.59 28 6.1 28 5.23 17.602 4.848 13.29Z"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

MaskSadRegular.displayName = "MaskSadRegular";

export default MaskSadRegular;
