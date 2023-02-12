import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SpeakerSlashRegular = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size, color } = props;

    return (
      <svg
        style={{ width: size || 32, height: size || 32 }}
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
        {...props}
      >
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M25.636 10.763a8.07 8.07 0 0 1 0 11.414M6 5.5l20 22M10.069 12.332v8.656M22.466 13.934a3.588 3.588 0 0 1 0 5.072M11.9 12.201H8.473A4.472 4.472 0 0 0 4 16.673v0a4.472 4.472 0 0 0 4.472 4.472h1.76l7.905 6.001v-7.613M14.184 9.027l3.953-3.173v7.673"
        />
      </svg>
    );
  }
);

SpeakerSlashRegular.displayName = "SpeakerSlashRegular";

export default SpeakerSlashRegular;
