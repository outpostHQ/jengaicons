import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const VideoCameraRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 9.214h13a5 5 0 0 1 5 5v9.572H9a5 5 0 0 1-5-5V9.214ZM28 21.643V11.357l-6 3.806v2.674l6 3.806Z"
        />
      </svg>
    );
  }
);

VideoCameraRegular.displayName = "VideoCameraRegular";

export default VideoCameraRegular;
