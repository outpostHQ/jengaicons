import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ClipboardTextFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M21.996 6.203h3.564a1 1 0 0 1 1 1v20.08a1 1 0 0 1-1 1H8.36a1 1 0 0 1-1-1V7.203a1 1 0 0 1 1-1h3.565c1-1.745 2.88-2.92 5.035-2.92a5.798 5.798 0 0 1 5.036 2.92Zm-5.036-.92a3.8 3.8 0 0 1 3.8 3.76h-7.6a3.8 3.8 0 0 1 3.8-3.76Zm-4 9a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Zm0 4a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ClipboardTextFill.displayName = "ClipboardTextFill";

export default ClipboardTextFill;
