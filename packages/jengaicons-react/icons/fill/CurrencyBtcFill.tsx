import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const CurrencyBtcFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M12.16 15.883h7.2a4 4 0 0 1 0 8h-7.2v-15.2h6a3.6 3.6 0 0 1 0 7.2M10.56 8.682h1.6M10.56 23.882h1.6M14.56 8.683v-2.4M17.76 8.683v-2.4M14.56 26.283v-2.4M17.76 26.283v-2.4"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

CurrencyBtcFill.displayName = "CurrencyBtcFill";

export default CurrencyBtcFill;
