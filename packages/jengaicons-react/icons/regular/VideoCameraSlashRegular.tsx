import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const VideoCameraSlashRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M22 23.786H9a5 5 0 0 1-5-5V9.214h5.3m5.71 0H17a5 5 0 0 1 5 5v3.38M5.09 4.5l21.82 24"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M28 21.643V11.357l-6 3.806v2.674l6 3.806Z"
        />
      </svg>
    );
  }
);

VideoCameraSlashRegular.displayName = "VideoCameraSlashRegular";

export default VideoCameraSlashRegular;
