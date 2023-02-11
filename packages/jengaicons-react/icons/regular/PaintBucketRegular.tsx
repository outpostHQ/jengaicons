import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PaintBucketRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M15.672 17.342a1.988 1.988 0 1 0 0-3.977 1.988 1.988 0 0 0 0 3.977ZM24.023 24.102c0-1.988 1.989-3.977 1.989-3.977S28 22.115 28 24.102a1.988 1.988 0 1 1-3.977 0v0ZM14.266 13.948 7.107 6.789"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 16 14.686 5.314 25.372 16 14.686 26.686 4 16Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

PaintBucketRegular.displayName = "PaintBucketRegular";

export default PaintBucketRegular;
