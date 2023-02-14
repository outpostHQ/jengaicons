import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const MicrophoneSlash = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          d="M16 24.944V28.5M7.111 7.167 24.89 26.722M16 24.33v3.281M23.34 17.765a7.387 7.387 0 0 1-.73 2.473m-1.687 2.21A7.386 7.386 0 0 1 8.66 17.766"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M11.898 8.671v-.068A4.102 4.102 0 0 1 16 4.5v0a4.103 4.103 0 0 1 4.103 4.103v7.648m-8.206-3.777v4.573a4 4 0 0 0 4 4h3.584"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

MicrophoneSlash.displayName = "MicrophoneSlash";

export default MicrophoneSlash;
