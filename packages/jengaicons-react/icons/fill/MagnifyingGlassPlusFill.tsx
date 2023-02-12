import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const MagnifyingGlassPlusFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M23.057 20.968a10.457 10.457 0 0 0 2.403-6.685c0-5.8-4.701-10.5-10.5-10.5s-10.5 4.7-10.5 10.5c0 5.799 4.701 10.5 10.5 10.5 2.54 0 4.869-.902 6.684-2.402l.033.034 6.075 6.075a1 1 0 1 0 1.415-1.414L23.09 21a1.167 1.167 0 0 0-.034-.033ZM15.96 10.283a1 1 0 0 0-2 0v3h-3a1 1 0 1 0 0 2h3v3a1 1 0 1 0 2 0v-3h3a1 1 0 0 0 0-2h-3v-3Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

MagnifyingGlassPlusFill.displayName = "MagnifyingGlassPlusFill";

export default MagnifyingGlassPlusFill;
