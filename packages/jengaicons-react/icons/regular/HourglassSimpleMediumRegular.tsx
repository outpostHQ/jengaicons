import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const HourglassSimpleMediumRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m13.875 16.5-1.752-1.192A10 10 0 0 1 7.75 7.04V4.5h16.5v2.54a10 10 0 0 1-4.373 8.268L18.125 16.5M9.567 11.5h12.866M13.875 16.5l-1.752 1.192A10 10 0 0 0 7.75 25.96V28.5h16.5v-2.54a10 10 0 0 0-4.373-8.268L18.125 16.5"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

HourglassSimpleMediumRegular.displayName = "HourglassSimpleMediumRegular";

export default HourglassSimpleMediumRegular;
