import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context, SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const PhoneDisconnect = forwardRef<SVGSVGElement, JengaIconRegularProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, weight } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      weight: weightCtx,
    } = useContext(JengaIconContext as Context<JengaIconRegularProps>);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        strokeWidth={weight || weightCtx || 2}
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
          strokeWidth={weight || weightCtx || "2"}
          d="M18.98 13.088a9.183 9.183 0 0 0-6 .014.864.864 0 0 0-.556.648l-.642 3.212a.87.87 0 0 1-.531.638l-5.15 2.06a.868.868 0 0 1-1.009-.269 5.226 5.226 0 0 1 .439-6.893 14.806 14.806 0 0 1 20.938 0 5.227 5.227 0 0 1 .439 6.893.867.867 0 0 1-1.008.27l-5.155-2.063a.87.87 0 0 1-.53-.63l-.676-3.238a.863.863 0 0 0-.56-.642ZM6.42 23.838h19.16"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

PhoneDisconnect.displayName = "PhoneDisconnect";

export default PhoneDisconnect;
