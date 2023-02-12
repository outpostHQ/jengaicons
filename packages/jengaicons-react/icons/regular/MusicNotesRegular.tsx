import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MusicNotesRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M23.681 24.66a3.36 3.36 0 1 0 0-6.722 3.36 3.36 0 0 0 0 6.721ZM8.319 28.5a3.36 3.36 0 1 0 0-6.721 3.36 3.36 0 0 0 0 6.721Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11.68 25.195V8.51L27.041 4.5v16.614M11.675 13.994l15.367-3.765"
        />
      </svg>
    );
  }
);

MusicNotesRegular.displayName = "MusicNotesRegular";

export default MusicNotesRegular;
