import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FolderNotchOpenRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4 10.461v14.77h19.91m-8.833-14.77h11.077v3.701"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15.077 10.461 11.385 6.77H4v3.692M7.692 16.394h7.143l3.011-2.24H28L24.308 25.23H4l3.692-8.837Z"
        />
      </svg>
    );
  }
);

FolderNotchOpenRegular.displayName = "FolderNotchOpenRegular";

export default FolderNotchOpenRegular;
