import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const SpeakerSlashRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          d="M25.636 10.763a8.07 8.07 0 0 1 0 11.414M6 5.5l20 22M10.069 12.332v8.656M22.466 13.934a3.588 3.588 0 0 1 0 5.072M11.9 12.201H8.473A4.472 4.472 0 0 0 4 16.673v0a4.472 4.472 0 0 0 4.472 4.472h1.76l7.905 6.001v-7.613M14.184 9.027l3.953-3.173v7.673"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

SpeakerSlashRegular.displayName = "SpeakerSlashRegular";

export default SpeakerSlashRegular;
