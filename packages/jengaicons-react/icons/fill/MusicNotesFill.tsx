import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MusicNotesFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size = 32 } = props;

    return (
      <svg
        style={{ width: size, height: size }}
        ref={ref}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        {...props}
      >
        <path
          d="M24.64 24.942a3.36 3.36 0 1 0 0-6.72 3.36 3.36 0 0 0 0 6.72ZM9.278 28.783a3.36 3.36 0 1 0 0-6.721 3.36 3.36 0 0 0 0 6.721Z"
          fill="#1C1B1F"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.64 25.477V8.793l15.362-4.01v16.614"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m28.001 10.512-15.366 3.765V9.02L28 4.795v5.717Z"
          fill="#1C1B1F"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

MusicNotesFill.displayName = "MusicNotesFill";

export default MusicNotesFill;
