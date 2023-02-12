import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const MaskHappyRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M18.17 14.67a3.023 3.023 0 0 1 4.514 0M9.094 14.67a3.025 3.025 0 0 1 4.513 0M19.23 20.72a6.038 6.038 0 0 1-6.682 0"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="M4.848 13.29c-.3-3.385-.129-7.183-.042-8.657a.5.5 0 0 1 .65-.442c9.022 2.731 18.044 1.065 21.571-.163.054-.02.104-.011.124.042.108.287.346 1.75-.045 9.22C26.62 22.58 23.397 28 15.59 28 6.1 28 5.23 17.602 4.848 13.29Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

MaskHappyRegular.displayName = "MaskHappyRegular";

export default MaskHappyRegular;
