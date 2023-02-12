import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const BarbellsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M8.76 9.083a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6.2h4.4v-6.2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2.4h1.2a1 1 0 0 1 1 1v2.8h1.6a1 1 0 0 1 0 2h-1.6v2.8a1 1 0 0 1-1 1h-1.2v2.4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6.2h-4.4v6.2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2.4h-1.2a1 1 0 0 1-1-1v-2.8h-1.6a1 1 0 1 1 0-2h1.6v-2.8a1 1 0 0 1 1-1h1.2v-2.4Zm4 1v12.4h-2v-12.4h2Zm8.4 12.4v-12.4h2v12.4h-2Z"
          fill={color || colorCtx || "#000000"}
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

BarbellsvgFill.displayName = "BarbellsvgFill";

export default BarbellsvgFill;
