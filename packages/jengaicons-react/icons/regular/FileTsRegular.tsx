import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FileTsRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M10.5 22H6M8.25 28v-6M20.998 28H26V11.008L19.021 4H6v11.982"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19.09 10.94V4.129l6.818 6.813h-6.819Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="M18.35 21.466h-3.066c-.902 0-1.633.732-1.633 1.634v0c0 .902.731 1.633 1.633 1.633h1.506M15.168 24.733h1.548c.902 0 1.633.732 1.633 1.634v0c0 .902-.731 1.633-1.633 1.633H13.65"
        />
      </svg>
    );
  }
);

FileTsRegular.displayName = "FileTsRegular";

export default FileTsRegular;
