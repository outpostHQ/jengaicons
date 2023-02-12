import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SpeakerSimpleSlashRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m6.001 5.5 20 22M23.998 13.5v6M27.998 11.5v10M11.864 12.201h-3.39A4.472 4.472 0 0 0 4 16.673v0a4.472 4.472 0 0 0 4.472 4.472h1.76l7.906 6.001v-7.613M14.186 9.027l3.953-3.173v7.673"
        />
      </svg>
    );
  }
);

SpeakerSimpleSlashRegular.displayName = "SpeakerSimpleSlashRegular";

export default SpeakerSimpleSlashRegular;
