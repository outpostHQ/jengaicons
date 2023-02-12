import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const CircleWavyWarningRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 10.63v6.321"
        />
        <path
          fill={color || colorCtx || "#000000"}
          d="M16 22.37a1.354 1.354 0 1 0 0-2.71 1.354 1.354 0 0 0 0 2.71Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m15.93 4.047-3.396 2.64H7.112v4.999L4 15.836l3.112 3.63v5.092h5.422l3.395 3.395 3.207-3.395h5.893v-5.092L28 15.836l-2.97-4.15V6.688h-5.895l-3.206-2.64Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

CircleWavyWarningRegular.displayName = "CircleWavyWarningRegular";

export default CircleWavyWarningRegular;
