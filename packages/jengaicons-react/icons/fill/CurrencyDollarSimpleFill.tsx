import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const CurrencyDollarSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.96 6.283v2.308M16.96 23.975v2.308M22.345 12.437a3.846 3.846 0 0 0-3.846-3.846h-3.462a3.846 3.846 0 0 0 0 7.692h4.23a3.846 3.846 0 1 1 0 7.692h-4.615a3.846 3.846 0 0 1-3.846-3.846"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

CurrencyDollarSimpleFill.displayName = "CurrencyDollarSimpleFill";

export default CurrencyDollarSimpleFill;
