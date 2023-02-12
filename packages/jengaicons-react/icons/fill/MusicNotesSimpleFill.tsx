import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MusicNotesSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M24.64 24.942a3.36 3.36 0 1 0 0-6.72 3.36 3.36 0 0 0 0 6.72ZM9.278 28.783a3.36 3.36 0 1 0 0-6.721 3.36 3.36 0 0 0 0 6.721Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12.64 25.477V8.793l15.362-4.01v16.614"
        />
      </svg>
    );
  }
);

MusicNotesSimpleFill.displayName = "MusicNotesSimpleFill";

export default MusicNotesSimpleFill;
