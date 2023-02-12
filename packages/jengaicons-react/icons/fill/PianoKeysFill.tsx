import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PianoKeysFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fill={color || "#000000"}
          fillRule="evenodd"
          d="M4.96 3.283a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1v-24a1 1 0 0 0-1-1h-24Zm17.91 24h5.09v-22h-3.364v12.682a.5.5 0 0 1-.5.5H22.87v8.818Zm-2-8.818h-1.228a.5.5 0 0 1-.5-.5V5.283h-4.364v12.682a.5.5 0 0 1-.5.5h-1.227v8.818h7.818v-8.818ZM5.96 5.283h3.364v12.682a.5.5 0 0 0 .5.5h1.227v8.818H5.96v-22Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

PianoKeysFill.displayName = "PianoKeysFill";

export default PianoKeysFill;
