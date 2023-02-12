import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const GitForkRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 28a3.818 3.818 0 1 0 0-7.636A3.818 3.818 0 0 0 16 28ZM24.003 11.636a3.818 3.818 0 1 0 0-7.636 3.818 3.818 0 0 0 0 7.636ZM7.998 11.636a3.818 3.818 0 1 0 0-7.636 3.818 3.818 0 0 0 0 7.636ZM16 16v4.364M24.002 11.645v4.161H7.998v-4.16"
        />
      </svg>
    );
  }
);

GitForkRegular.displayName = "GitForkRegular";

export default GitForkRegular;
