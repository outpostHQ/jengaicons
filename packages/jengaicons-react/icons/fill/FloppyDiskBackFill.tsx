import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FloppyDiskBackFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, style } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      style: styleCtx,
    } = useContext(JengaIconContext);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        ref={ref}
        style={{
          ...styleCtx,
          ...style,
        }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          fill={color || colorCtx || "#000000"}
          fillRule="evenodd"
          d="M11.96 10.284a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.283h6a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1h-22a1 1 0 0 1-1-1V11.717a1 1 0 0 1 .307-.72l6.686-6.435a1 1 0 0 1 .693-.28h7.314v5.002h-7a1 1 0 0 0-1 1Zm5 6a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-4.5 2.5a4.5 4.5 0 1 1 9.001 0 4.5 4.5 0 0 1-9 0Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

FloppyDiskBackFill.displayName = "FloppyDiskBackFill";

export default FloppyDiskBackFill;
