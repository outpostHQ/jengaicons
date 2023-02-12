import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FilePptRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M26 21h-4.5M23.75 28v-7M4.299 18.041V4h15.236l8.166 8.2v5.841"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19.615 12.121V4.15l7.978 7.971h-7.978Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="M5.043 24.99h2.591a2.043 2.043 0 0 0 2.043-2.043v0a2.043 2.043 0 0 0-2.043-2.043H5.067a.023.023 0 0 0-.024.023V28M13.433 24.99h2.59a2.043 2.043 0 0 0 2.044-2.043v0a2.043 2.043 0 0 0-2.043-2.043h-2.568a.023.023 0 0 0-.023.023V28"
        />
      </svg>
    );
  }
);

FilePptRegular.displayName = "FilePptRegular";

export default FilePptRegular;
