import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FileZipRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 21.672v6.215M4 18.513v-14.4h15.626L28 12.523v5.99"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19.707 12.442V4.266l8.183 8.176h-8.183Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="M21.18 25.251h3.01a1.79 1.79 0 0 0 1.79-1.79v0a1.79 1.79 0 0 0-1.79-1.79h-2.987a.024.024 0 0 0-.023.025v6.191"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6.682 21.672h4.06l-4.06 6.055h4.06"
        />
      </svg>
    );
  }
);

FileZipRegular.displayName = "FileZipRegular";

export default FileZipRegular;
