import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const EnvelopeSimpleOpenFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.96 13.821v12.464a1 1 0 0 1-1 1h-22a1 1 0 0 1-1-1V13.82a1 1 0 0 1 .444-.832l10.974-7.337a1 1 0 0 1 1.11-.001l11.026 7.339a1 1 0 0 1 .446.832Zm-20.688.345a1 1 0 1 0-1.162 1.628l7.584 5.407a1 1 0 0 0 .58.186h3.371a1 1 0 0 0 .58-.186l7.584-5.407a1 1 0 0 0-1.16-1.628l-7.324 5.22h-2.73l-7.323-5.22Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

EnvelopeSimpleOpenFill.displayName = "EnvelopeSimpleOpenFill";

export default EnvelopeSimpleOpenFill;
