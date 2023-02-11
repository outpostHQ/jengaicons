import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const GitCommitFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M22.065 17.278a5.202 5.202 0 0 1-10.21 0 1.03 1.03 0 0 1-.095.005h-6.8a1 1 0 1 1 0-2h6.8c.032 0 .064.001.095.004a5.202 5.202 0 0 1 10.21 0 1.04 1.04 0 0 1 .095-.004h6.8a1 1 0 0 1 0 2h-6.8c-.032 0-.064-.002-.095-.005Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

GitCommitFill.displayName = "GitCommitFill";

export default GitCommitFill;
