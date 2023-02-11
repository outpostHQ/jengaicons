import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const VideoCameraRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4 9.214h13a5 5 0 0 1 5 5v9.572H9a5 5 0 0 1-5-5V9.214ZM28 21.643V11.357l-6 3.806v2.674l6 3.806Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

VideoCameraRegular.displayName = "VideoCameraRegular";

export default VideoCameraRegular;
