import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FileVideoRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M19.5 4v7h7"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M22.5 28h3a1 1 0 0 0 1-1V11l-7-7h-12a1 1 0 0 0-1 1v11"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21.498 28H26.5V11.008L19.521 4H6.5v11.982"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19.59 10.94V4.129l6.818 6.813h-6.819Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5.5 20h6.75a3 3 0 0 1 3 3v5H8.5a3 3 0 0 1-3-3v-5ZM18.5 26.823v-5.647l-3.25 2.09v1.468l3.25 2.09Z"
        />
      </svg>
    );
  }
);

FileVideoRegular.displayName = "FileVideoRegular";

export default FileVideoRegular;
