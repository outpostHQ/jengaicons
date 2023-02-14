import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const MicrophoneSlashFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M15.485 4.783h1.474a4.103 4.103 0 0 1 4.103 4.103v7.648L12.857 7.41a2.628 2.628 0 0 1 2.628-2.628ZM8.81 6.777a1 1 0 0 0-1.48 1.345l5.526 6.08v3.128a4 4 0 0 0 4 4h2.481l1.124 1.236a6.385 6.385 0 0 1-9.848-4.63 1 1 0 1 0-1.987.223 8.385 8.385 0 0 0 7.333 7.393v3.231a1 1 0 0 0 2 0v-3.231a8.385 8.385 0 0 0 3.86-1.492l3.29 3.618a1 1 0 1 0 1.479-1.345L8.811 6.777Zm16.483 11.382a1 1 0 1 0-1.988-.222c-.084.75-.3 1.473-.631 2.138a1 1 0 0 0 1.79.893 8.386 8.386 0 0 0 .829-2.809Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

MicrophoneSlashFill.displayName = "MicrophoneSlashFill";

export default MicrophoneSlashFill;
