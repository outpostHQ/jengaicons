import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FileVueRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M25.841 24.805h-3.108M26.359 27.913h-3.626v-6.216h3.626M4 18.487v-14.4h15.626L28 12.497v5.99"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19.707 12.416V4.241l8.183 8.175h-8.183ZM4.736 21.697l2.422 6.216 2.627-6.216"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="M18.52 21.697v4.216a2 2 0 0 1-2 2h-.592a2 2 0 0 1-2-2v-4.216"
        />
      </svg>
    );
  }
);

FileVueRegular.displayName = "FileVueRegular";

export default FileVueRegular;
