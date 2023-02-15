import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ChartBarHorizontalFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M8.38 28.283a1 1 0 0 1-2 0V4.283a1 1 0 1 1 2 0v.92h13.4a1 1 0 0 1 1 1v5.791h3.76a1 1 0 0 1 1 1v6.602a1 1 0 0 1-1 1h-9.52v5.767a1 1 0 0 1-1 1H8.38v.92Zm0-21.08v4.72h12.4v-4.72H8.38Zm0 18.16h6.64v-4.72H8.38v4.72Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ChartBarHorizontalFill.displayName = "ChartBarHorizontalFill";

export default ChartBarHorizontalFill;
