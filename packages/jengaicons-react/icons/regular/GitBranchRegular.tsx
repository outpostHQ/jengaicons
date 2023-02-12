import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const GitBranchRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M7.818 28a3.818 3.818 0 1 0 0-7.636 3.818 3.818 0 0 0 0 7.636ZM24.182 11.636a3.818 3.818 0 1 0 0-7.636 3.818 3.818 0 0 0 0 7.636ZM7.818 11.636a3.818 3.818 0 1 0 0-7.636 3.818 3.818 0 0 0 0 7.636ZM7.818 11.636v8.728"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="M23.572 11.952v0a4.082 4.082 0 0 1-4.082 4.082h-7.34a4.126 4.126 0 0 0-4.126 4.126v0"
        />
      </svg>
    );
  }
);

GitBranchRegular.displayName = "GitBranchRegular";

export default GitBranchRegular;
