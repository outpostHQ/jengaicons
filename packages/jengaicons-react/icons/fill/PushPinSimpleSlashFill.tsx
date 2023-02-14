import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const PushPinSimpleSlashFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M24.392 5.283h.728a1 1 0 1 0 0-2H13.029a1 1 0 0 0-.74 1.673l12.62 13.882a1 1 0 0 0 1.725-.847L24.392 5.283ZM8.58 3.61A1 1 0 1 0 7.1 4.956L9.986 8.13 7.96 19.603H6.88a1 1 0 1 0 0 2H16.44v6.68a1 1 0 0 0 2 0v-6.68h3.794l4.066 4.473a1 1 0 0 0 1.48-1.346l-4.358-4.793-.006-.007-11.62-12.782a1.878 1.878 0 0 0-.005-.005L8.58 3.61Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

PushPinSimpleSlashFill.displayName = "PushPinSimpleSlashFill";

export default PushPinSimpleSlashFill;
