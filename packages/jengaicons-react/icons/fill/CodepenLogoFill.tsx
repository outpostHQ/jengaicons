import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const CodepenLogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M17.488 4.79a1 1 0 0 0-.976 0l-12 6.715a1 1 0 0 0-.506.979c-.004.035-.006.07-.006.107v6.928a1 1 0 1 0 2 0v-5.383l3.989 2.374.859.511 1.023-1.718-.86-.512-4.01-2.387 8.96-5.014v6.557a1 1 0 1 0 2 0V7.346L27 12.404l-4.012 2.387-.859.512 1.023 1.718.86-.511L28 14.136v5.579a1 1 0 1 0 2 0V12.59a1.02 1.02 0 0 0-.006-.107 1 1 0 0 0-.506-.979l-12-6.715Z"
          clipRule="evenodd"
        />
        <path
          fill={color || colorCtx || "#000000"}
          d="m12.381 15.61 4.58-2.563 4.612 2.582-4.61 2.726-4.582-2.745ZM15.972 24.87l.006.003v1.623c0 .293-.252.542-.506.396L4.498 20.53a1 1 0 0 1 1.004-1.73l.578.335 4.289-2.4 5.613 3.364-.01 4.77ZM17.96 20.089V26.3l.002-.001v.316c0 .279.242.512.484.373l10.974-6.362a1 1 0 0 0-1.004-1.73l-.492.285-4.332-2.424-5.631 3.33Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

CodepenLogoFill.displayName = "CodepenLogoFill";

export default CodepenLogoFill;
