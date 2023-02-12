import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DownloadRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M21.96 17.525h6v9.143h-24v-9.143h6"
        />
        <path
          fill={color || "#000000"}
          d="M22.923 23.688c.765 0 1.385-.63 1.385-1.405 0-.776-.62-1.405-1.385-1.405s-1.384.629-1.384 1.405.62 1.405 1.384 1.405Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11.757 10.84 16 15.144l4.243-4.306M16 2.967v12.178"
        />
      </svg>
    );
  }
);

DownloadRegular.displayName = "DownloadRegular";

export default DownloadRegular;
