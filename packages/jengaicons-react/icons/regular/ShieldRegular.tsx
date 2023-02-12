import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ShieldRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          strokeLinejoin="round"
          strokeWidth="2"
          d="M27.424 14.627V4H4.576v10.627C4.576 21.785 8.639 24.238 16 28c7.176-3.298 11.424-5.845 11.424-13.373Z"
        />
      </svg>
    );
  }
);

ShieldRegular.displayName = "ShieldRegular";

export default ShieldRegular;
