import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ChalkboardTeacherRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M13 22a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M28 6H4v20h2.992c.153-1.302 1.561-3.925 5.977-3.998 4.416-.074 5.853 2.635 6.02 3.998H28V6Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 12.245V10h16v12.007h-2.349"
        />
      </svg>
    );
  }
);

ChalkboardTeacherRegular.displayName = "ChalkboardTeacherRegular";

export default ChalkboardTeacherRegular;
