import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const GitBranchFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fill={color || "#000000"}
          fillRule="evenodd"
          d="M25.516 11.901a3.819 3.819 0 1 0-1.985-.337 3.89 3.89 0 0 1-3.89 3.793h-5.715a5.922 5.922 0 0 0-4.148 1.687v-5.125a1.01 1.01 0 0 0-.008-.13 3.82 3.82 0 0 0-.992-7.506 3.818 3.818 0 0 0-.991 7.506 1.01 1.01 0 0 0-.009.13v8.728c0 .044.003.087.009.13a3.82 3.82 0 0 0 .991 7.506 3.818 3.818 0 0 0 1.232-7.433 3.943 3.943 0 0 1 3.916-3.494h5.716a5.89 5.89 0 0 0 5.874-5.455Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

GitBranchFill.displayName = "GitBranchFill";

export default GitBranchFill;
