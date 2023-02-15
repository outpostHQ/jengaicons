import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const MagnifyingGlassMinusFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M23.557 21.468a10.457 10.457 0 0 0 2.403-6.685c0-5.8-4.701-10.5-10.5-10.5s-10.5 4.7-10.5 10.5c0 5.798 4.701 10.5 10.5 10.5 2.54 0 4.869-.902 6.684-2.403a.96.96 0 0 0 .033.035l6.075 6.075a1 1 0 0 0 1.415-1.414L23.59 21.5a1.054 1.054 0 0 0-.034-.032ZM10.46 14.783a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2h-8a1 1 0 0 1-1-1Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

MagnifyingGlassMinusFill.displayName = "MagnifyingGlassMinusFill";

export default MagnifyingGlassMinusFill;
