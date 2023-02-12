import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const BellRingingRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M12.16 23.27v.946c0 1.004.405 1.966 1.125 2.676A3.869 3.869 0 0 0 16 28a3.869 3.869 0 0 0 2.715-1.108 3.756 3.756 0 0 0 1.125-2.676v-.946M22.651 4a12.535 12.535 0 0 1 4.55 5.054M4.799 9.054A12.535 12.535 0 0 1 9.349 4"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.561 23.27s2.464-3.503 2.88-5.885c.139-.794.168-1.636.118-2.491-.278-4.738 2.695-9.933 7.44-9.933 4.747 0 7.72 5.195 7.442 9.933-.05.855-.02 1.697.118 2.491.416 2.381 2.88 5.885 2.88 5.885H5.56Z"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

BellRingingRegular.displayName = "BellRingingRegular";

export default BellRingingRegular;
