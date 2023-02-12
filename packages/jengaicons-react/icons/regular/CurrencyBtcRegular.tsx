import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const CurrencyBtcRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M11.2 15.6h7.2a4 4 0 1 1 0 8h-7.2V8.4h6a3.6 3.6 0 0 1 0 7.2M9.6 8.4h1.6M9.6 23.6h1.6M13.6 8.4V6M16.8 8.4V6M13.6 26v-2.4M16.8 26v-2.4"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

CurrencyBtcRegular.displayName = "CurrencyBtcRegular";

export default CurrencyBtcRegular;
