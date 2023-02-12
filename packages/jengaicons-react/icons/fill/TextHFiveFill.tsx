import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const TextHFiveFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M8.73 9.452a1 1 0 1 0-2 0V20.53a1 1 0 0 0 2 0v-4.538h7.6v4.538a1 1 0 0 0 2 0V9.452a1 1 0 1 0-2 0v4.539h-7.6V9.452Zm13.749 3.8a1 1 0 0 0-.986.83l-.84 4.85a1 1 0 0 0 1.702.867c.05-.051.105-.1.165-.146.278-.214.646-.35 1.061-.35.968 0 1.61.704 1.61 1.405 0 .701-.642 1.406-1.61 1.406a1.69 1.69 0 0 1-1.294-.572 1 1 0 1 0-1.525 1.293 3.689 3.689 0 0 0 2.82 1.279c1.915 0 3.609-1.45 3.609-3.406 0-1.956-1.694-3.405-3.61-3.405-.212 0-.421.017-.625.05l.364-2.1h2.871a1 1 0 1 0 0-2h-3.712Z"
          fill={color || colorCtx || "#000000"}
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

TextHFiveFill.displayName = "TextHFiveFill";

export default TextHFiveFill;
