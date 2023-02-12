import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ThermometerSimpleRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 25.073a2.143 2.143 0 1 0 0-4.287 2.143 2.143 0 0 0 0 4.287ZM16 20.787v-8.572M12.878 17.952V7.363c0-1.581 1.395-2.863 3.116-2.863s3.117 1.282 3.117 2.863v10.589"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="M12.88 17.958a5.732 5.732 0 1 0 6.239 0"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ThermometerSimpleRegular.displayName = "ThermometerSimpleRegular";

export default ThermometerSimpleRegular;
