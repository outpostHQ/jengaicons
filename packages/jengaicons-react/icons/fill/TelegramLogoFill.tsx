import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const TelegramLogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, style } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      style: styleCtx,
    } = useContext(JengaIconContext);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        ref={ref}
        style={{
          ...styleCtx,
          ...style,
        }}
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
          d="m12.11 17.353 10.76 9.47a.958.958 0 0 0 1.565-.506l4.501-19.64a.957.957 0 0 0-1.283-1.106L5.567 14.248a.957.957 0 0 0 .163 1.83l6.38 1.275Z"
        />
        <path
          fill={color || colorCtx || "#000000"}
          d="m17.483 22.082-3.74 3.74a.957.957 0 0 1-1.634-.677v-7.792"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m17.483 22.082-3.74 3.74a.957.957 0 0 1-1.634-.677v-7.792l5.374 4.73Z"
        />
        <path
          fill={color || colorCtx || "#000000"}
          d="M28 6.5 4.5 15l7.5 2.5 16-11Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

TelegramLogoFill.displayName = "TelegramLogoFill";

export default TelegramLogoFill;
