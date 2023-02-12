import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const PaintBrushFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M18.387 13.736c-.679.806-1.26 1.553-1.713 2.16a6.088 6.088 0 0 1 1.844 1.844 47.756 47.756 0 0 0 2.16-1.714 8.881 8.881 0 0 0-2.29-2.29Zm-.961-1.95a49.237 49.237 0 0 0-2.45 3.04.998.998 0 0 0-.146.281 6.089 6.089 0 0 0-7.528 5.916c0 3.103-1.269 4.937-1.939 5.689-.126.141-.022.4.167.4h7.86a6.088 6.088 0 0 0 5.916-7.529.998.998 0 0 0 .282-.146 49.198 49.198 0 0 0 3.07-2.475 37.343 37.343 0 0 0 3.2-3.139c2.137-2.39 4.102-5.366 4.102-8.37a1 1 0 0 0-1-1c-3.004 0-5.98 1.966-8.37 4.104a37.37 37.37 0 0 0-3.164 3.228Zm2.292.44c.95.685 1.784 1.519 2.469 2.47a33.285 33.285 0 0 0 2.18-2.206c1.743-1.949 3.078-4.004 3.473-5.917-1.912.395-3.968 1.731-5.916 3.474-.782.7-1.524 1.444-2.206 2.18Z"
          fill={color || colorCtx || "#000000"}
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

PaintBrushFill.displayName = "PaintBrushFill";

export default PaintBrushFill;
