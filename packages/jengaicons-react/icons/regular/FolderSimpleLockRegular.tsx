import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FolderSimpleLockRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4 10.077v15.538h9.57M16 10.077h12v2.841"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="m16 10.077-4-3.692H4v3.692M19 20.115h9v5.5h-9v-5.5ZM21 18.615a2.5 2.5 0 1 1 5 0v1.5h-5v-1.5Z"
        />
      </svg>
    );
  }
);

FolderSimpleLockRegular.displayName = "FolderSimpleLockRegular";

export default FolderSimpleLockRegular;
