import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ShieldStarFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.384 5.283v9.627c0 7.1-4.074 9.956-10.982 13.169a1 1 0 0 1-.876-.018c-7.086-3.642-10.99-6.226-10.99-13.15V5.28a.999.999 0 0 1 1-.998h20.848a1 1 0 0 1 1 1Zm-10.424 5a1 1 0 0 0-2 0v3.622l-3.44-1.123a1 1 0 0 0-.62 1.902l3.444 1.123-2.131 2.939a1 1 0 0 0 1.619 1.174l2.128-2.934 2.128 2.934a1 1 0 1 0 1.619-1.174l-2.131-2.938 3.444-1.124a1 1 0 0 0-.62-1.902l-3.44 1.123v-3.622Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ShieldStarFill.displayName = "ShieldStarFill";

export default ShieldStarFill;
