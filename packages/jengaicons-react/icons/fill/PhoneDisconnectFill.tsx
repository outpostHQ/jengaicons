import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const PhoneDisconnectFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M19.94 13.37a9.183 9.183 0 0 0-6 .014.864.864 0 0 0-.556.649l-.643 3.212a.872.872 0 0 1-.53.638l-5.15 2.06a.868.868 0 0 1-1.009-.269 5.226 5.226 0 0 1 .439-6.893 14.806 14.806 0 0 1 20.938 0 5.226 5.226 0 0 1 .439 6.893.868.868 0 0 1-1.008.27l-5.155-2.063a.871.871 0 0 1-.53-.63l-.676-3.238a.865.865 0 0 0-.56-.642Z"
          fill={color || colorCtx || "#000000"}
        />
        <path
          d="M7.38 24.121h19.16"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

PhoneDisconnectFill.displayName = "PhoneDisconnectFill";

export default PhoneDisconnectFill;
