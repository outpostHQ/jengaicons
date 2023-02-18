import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const WhatsappLogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fill={color || colorCtx || "#000000"}
          fillRule="evenodd"
          d="M5.17 14.046a12 12 0 0 0 1.47 8.36l-1.185 4.146a1 1 0 0 0 1.236 1.236l4.147-1.184A12 12 0 1 0 5.17 14.046Zm10.974 8.476c1.217.503 2.52.76 3.836.759a3.511 3.511 0 0 0 3.488-3.502.862.862 0 0 0-.435-.748l-2.558-1.462a1 1 0 0 0-1.011.01l-1.957 1.175a6.025 6.025 0 0 1-3.018-3.018l1.174-1.957a1.001 1.001 0 0 0 .01-1.01l-1.461-2.56a.862.862 0 0 0-.749-.434 3.499 3.499 0 0 0-3.501 3.487 10.004 10.004 0 0 0 6.182 9.26Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

WhatsappLogoFill.displayName = "WhatsappLogoFill";

export default WhatsappLogoFill;
