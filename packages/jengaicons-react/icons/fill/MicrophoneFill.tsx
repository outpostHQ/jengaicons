import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const MicrophoneFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.96 4.783a4.615 4.615 0 0 0-4.615 4.615v7.385a4.615 4.615 0 0 0 9.23 0V9.398a4.615 4.615 0 0 0-4.615-4.615Zm-8.368 11.93a1 1 0 0 1 1.105.882 7.309 7.309 0 0 0 7.251 6.496h.024a7.309 7.309 0 0 0 7.251-6.496 1 1 0 1 1 1.988.222 9.309 9.309 0 0 1-8.25 8.22v2.746a1 1 0 0 1-2 0v-2.746a9.309 9.309 0 0 1-8.252-8.22 1 1 0 0 1 .883-1.105Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

MicrophoneFill.displayName = "MicrophoneFill";

export default MicrophoneFill;
