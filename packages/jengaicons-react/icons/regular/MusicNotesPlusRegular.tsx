import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MusicNotesPlusRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M25.12 4.5v5.76M28 7.38h-5.76M22.72 24.64a3.368 3.368 0 0 0 3.36-3.376 3.368 3.368 0 0 0-3.36-3.376 3.368 3.368 0 0 0-3.36 3.376 3.368 3.368 0 0 0 3.36 3.377ZM7.36 28.5a3.368 3.368 0 0 0 3.36-3.377 3.368 3.368 0 0 0-3.36-3.376A3.368 3.368 0 0 0 4 25.124 3.368 3.368 0 0 0 7.36 28.5Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10.72 25.179V8.415l6.76-1.776m8.6 14.44v-6.757M10.716 13.924l9.496-2.407"
        />
      </svg>
    );
  }
);

MusicNotesPlusRegular.displayName = "MusicNotesPlusRegular";

export default MusicNotesPlusRegular;
