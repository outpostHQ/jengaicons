import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FolderSimpleUserRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M22.994 21.609a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M27 25.615a4.006 4.006 0 1 0-8.013 0M4 10.077v15.538h10.57M16 10.077h12v2.841"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="m16 10.077-4-3.692H4v3.692"
        />
      </svg>
    );
  }
);

FolderSimpleUserRegular.displayName = "FolderSimpleUserRegular";

export default FolderSimpleUserRegular;
