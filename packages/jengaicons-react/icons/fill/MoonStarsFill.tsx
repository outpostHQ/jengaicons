import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const MoonStarsFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M20.486 4.254a1 1 0 0 1 1 1v.883h.883a1 1 0 1 1 0 2h-.883v.883a1 1 0 0 1-2 0v-.883h-.883a1 1 0 1 1 0-2h.883v-.883a1 1 0 0 1 1-1Zm1.825 8.532a1 1 0 0 1 1-1h5.649a1 1 0 0 1 0 2h-5.649a1 1 0 0 1-1-1Zm3.043 7.807c.383-.074.726.274.591.64A10.827 10.827 0 1 1 12.04 7.327c.365-.135.714.209.64.591a10.816 10.816 0 0 0 12.674 12.675Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

MoonStarsFill.displayName = "MoonStarsFill";

export default MoonStarsFill;
