import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const SmileyStickerFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.96 28.783c-6.628 0-12-5.373-12-12 0-6.628 5.372-12 12-12 6.627 0 12 5.372 12 12 0 1.141-.16 2.245-.457 3.291a.49.49 0 0 1-.13.217l-8.278 8.012a.488.488 0 0 1-.222.124c-.933.233-1.908.356-2.913.356Zm-3-14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm9 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-.302 4.634a1 1 0 0 1 .366 1.366 7.002 7.002 0 0 1-12.127 0 1 1 0 0 1 1.732-1 5.002 5.002 0 0 0 8.663 0 1 1 0 0 1 1.366-.366Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

SmileyStickerFill.displayName = "SmileyStickerFill";

export default SmileyStickerFill;
