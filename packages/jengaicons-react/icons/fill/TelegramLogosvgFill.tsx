import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const TelegramLogosvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m12.11 17.495 10.76 9.469a.958.958 0 0 0 1.565-.505l4.501-19.641a.957.957 0 0 0-1.283-1.105L5.567 14.389a.957.957 0 0 0 .163 1.83l6.38 1.276Z"
        />
        <path
          fill={color || colorCtx || "#000000"}
          d="m17.483 22.224-3.74 3.74a.958.958 0 0 1-1.634-.678v-7.791"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m17.483 22.224-3.74 3.74a.958.958 0 0 1-1.634-.678v-7.791l5.374 4.729Z"
        />
        <path
          fill={color || colorCtx || "#000000"}
          d="m28 6.641-23.5 8.5 7.5 2.5 16-11Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

TelegramLogosvgFill.displayName = "TelegramLogosvgFill";

export default TelegramLogosvgFill;
