import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context, SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const FlowerLotus = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          d="M16 24.65c1.647 0 4.374-.02 7.503-1.832 3.129-1.811 4.148-4.065 4.467-5.228a.814.814 0 0 0-.587-1.01c-.751-.195-2.069-.37-3.756.032M8.374 16.602c-1.688-.392-3.006-.216-3.757-.021a.814.814 0 0 0-.587 1.009c.32 1.163 1.338 3.427 4.467 5.228C11.626 24.62 14.353 24.65 16 24.65"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M16 24.65s4.117-2.244 4.117-8.234c0-4.693-2.532-7.08-3.623-7.904a.834.834 0 0 0-.988 0c-1.091.823-3.623 3.211-3.623 7.904 0 5.99 4.117 8.234 4.117 8.234Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M16 24.65c1.235-.268 4.56-2.14 6.556-5.599 1.997-3.458 1.503-6.206 1.112-7.41a.803.803 0 0 0-.947-.546 7.936 7.936 0 0 0-3.232 1.554M12.51 12.65a7.935 7.935 0 0 0-3.23-1.555.803.803 0 0 0-.948.546c-.39 1.204-.885 3.962 1.112 7.41s5.32 5.331 6.556 5.599"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

FlowerLotus.displayName = "FlowerLotus";

export default FlowerLotus;
