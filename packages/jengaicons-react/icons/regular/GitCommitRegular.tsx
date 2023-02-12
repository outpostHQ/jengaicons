import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const GitCommitRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 21.2a5.2 5.2 0 1 0 0-10.4 5.2 5.2 0 0 0 0 10.4ZM4 16h6.8M21.2 16H28"
        />
      </svg>
    );
  }
);

GitCommitRegular.displayName = "GitCommitRegular";

export default GitCommitRegular;
