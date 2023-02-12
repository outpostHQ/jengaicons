import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const CreditCardsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.961 7.976H28.96v16.615H4.961z"
        />
        <path
          fill={color || colorCtx || "#000000"}
          fillRule="evenodd"
          d="M4.96 12.69h24v11.9h-24v-11.9Zm15.615 8.208a1 1 0 0 1 1-1h3.692a1 1 0 1 1 0 2h-3.692a1 1 0 0 1-1-1Zm-4.538-1a1 1 0 1 0 0 2h1.846a1 1 0 1 0 0-2h-1.846Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

CreditCardsvgFill.displayName = "CreditCardsvgFill";

export default CreditCardsvgFill;
