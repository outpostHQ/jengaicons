import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const WatchFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M12.28 4.633a1 1 0 0 1 .988-.85h7.384a1 1 0 0 1 .99.85l.91 6.005a8.286 8.286 0 0 1 2.716 6.145 8.286 8.286 0 0 1-2.717 6.145l-.91 6.005a1 1 0 0 1-.989.85h-7.384a1 1 0 0 1-.989-.85l-.91-6.005a8.286 8.286 0 0 1-2.717-6.145 8.286 8.286 0 0 1 2.717-6.145l.91-6.005Zm1.333 19.756.515 3.394h5.665l.514-3.394a8.278 8.278 0 0 1-3.347.702 8.28 8.28 0 0 1-3.347-.702Zm6.18-18.606.514 3.394a8.28 8.28 0 0 0-3.347-.702 8.28 8.28 0 0 0-3.347.702l.515-3.394h5.665Zm-1.833 6.385a1 1 0 0 0-2 0v4.615a1 1 0 0 0 1 1h4.615a1 1 0 1 0 0-2H17.96v-3.615Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

WatchFill.displayName = "WatchFill";

export default WatchFill;
