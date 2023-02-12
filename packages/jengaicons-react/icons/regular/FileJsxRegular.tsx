import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FileJsxRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M20.875 21.988 25.386 28M25.385 21.988 20.875 28"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="M8.844 21.453v4.614A1.933 1.933 0 0 1 6.91 28v0a1.933 1.933 0 0 1-1.934-1.933v-.271M17.214 21.453h-3.071c-.904 0-1.637.733-1.637 1.637v0c0 .904.733 1.636 1.637 1.636h1.508M14.026 24.726h1.55c.905 0 1.638.733 1.638 1.637v0c0 .904-.733 1.637-1.637 1.637h-3.071"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.392 17.93V4h15.115l8.101 8.136v5.794"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19.586 12.057V4.149l7.915 7.908h-7.915Z"
        />
      </svg>
    );
  }
);

FileJsxRegular.displayName = "FileJsxRegular";

export default FileJsxRegular;
