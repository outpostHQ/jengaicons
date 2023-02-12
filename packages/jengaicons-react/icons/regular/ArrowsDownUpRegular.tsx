import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowsDownUpRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M8.805 4v24M24.24 28V4M19.971 8.32l4.218-4.268 4.217 4.268M4.537 23.68l4.217 4.268 4.217-4.268"
        />
      </svg>
    );
  }
);

ArrowsDownUpRegular.displayName = "ArrowsDownUpRegular";

export default ArrowsDownUpRegular;
