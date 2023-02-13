import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const WhatsappLogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fillRule="evenodd"
          d="M5.17 14.188a12 12 0 0 0 1.47 8.359l-1.185 4.146A1 1 0 0 0 6.69 27.93l4.147-1.185A12 12 0 1 0 5.17 14.188Zm10.974 8.476c1.217.502 2.52.76 3.836.758a3.511 3.511 0 0 0 3.488-3.501.862.862 0 0 0-.435-.748l-2.558-1.462a1 1 0 0 0-1.011.01l-1.957 1.174a6.025 6.025 0 0 1-3.018-3.018l1.174-1.956a1.001 1.001 0 0 0 .01-1.011l-1.461-2.559a.863.863 0 0 0-.749-.434 3.499 3.499 0 0 0-3.501 3.487 10.005 10.005 0 0 0 6.182 9.26Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

WhatsappLogoFill.displayName = "WhatsappLogoFill";

export default WhatsappLogoFill;