import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FileJsxRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M20.875 21.988 25.386 28M25.385 21.988 20.875 28"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.844 21.453v4.614A1.933 1.933 0 0 1 6.91 28v0a1.933 1.933 0 0 1-1.934-1.933v-.271M17.214 21.453h-3.071c-.904 0-1.637.733-1.637 1.637v0c0 .904.733 1.636 1.637 1.636h1.508M14.026 24.726h1.55c.905 0 1.638.733 1.638 1.637v0c0 .904-.733 1.637-1.637 1.637h-3.071"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4.392 17.93V4h15.115l8.101 8.136v5.794"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.586 12.057V4.149l7.915 7.908h-7.915Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

FileJsxRegular.displayName = "FileJsxRegular";

export default FileJsxRegular;
