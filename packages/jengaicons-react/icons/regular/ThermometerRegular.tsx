import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ThermometerRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M22.643 13.5a2.143 2.143 0 1 0 0-4.285 2.143 2.143 0 0 0 0 4.286ZM12.786 25.073a2.143 2.143 0 1 0 0-4.286 2.143 2.143 0 0 0 0 4.286ZM12.786 20.787v-8.572M9.664 17.652V7.063c0-1.58 1.395-2.863 3.116-2.863 1.72 0 3.116 1.282 3.116 2.863v10.59"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.666 17.659a5.732 5.732 0 1 0 6.239 0"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ThermometerRegular.displayName = "ThermometerRegular";

export default ThermometerRegular;
