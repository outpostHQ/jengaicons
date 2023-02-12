import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FileXlsRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m6.16 21.633 4.66 6.215M10.82 21.633l-4.66 6.215M4 18.422v-14.4h15.626L28 12.432v5.99"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19.707 12.351V4.176l8.183 8.175h-8.183Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="M26.36 21.633h-3.324c-.858 0-1.554.695-1.554 1.553v0c0 .859.696 1.554 1.554 1.554h1.704M23.056 24.74h1.75c.857 0 1.553.696 1.553 1.554v0c0 .858-.696 1.554-1.554 1.554h-3.323"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M18.59 27.978h-3.626v-6.345"
        />
      </svg>
    );
  }
);

FileXlsRegular.displayName = "FileXlsRegular";

export default FileXlsRegular;
