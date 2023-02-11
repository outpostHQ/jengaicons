import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FileRsRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M20.998 28H26V11.008L19.021 4H6v11.982"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.09 10.94V4.129l6.818 6.813h-6.819Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 21.543h-3.03c-.89 0-1.614.722-1.614 1.614v0c0 .892.723 1.614 1.615 1.614h1.488M14.855 24.771h1.53c.892 0 1.615.723 1.615 1.615v0c0 .891-.723 1.614-1.614 1.614h-3.03M6 25.261h2.774a1.86 1.86 0 0 0 1.86-1.86v0a1.86 1.86 0 0 0-1.86-1.858h-2.75a.023.023 0 0 0-.024.023V28M7.01 25.33 10.634 28"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

FileRsRegular.displayName = "FileRsRegular";

export default FileRsRegular;
