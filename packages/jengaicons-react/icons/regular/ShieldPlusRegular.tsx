import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ShieldPlusRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M12 14.523h8M16 10.523v8"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M27.424 14.627V4H4.576v10.627C4.576 21.692 8.639 24.238 16 28c7.176-3.298 11.424-6.122 11.424-13.373Z"
        />
      </svg>
    );
  }
);

ShieldPlusRegular.displayName = "ShieldPlusRegular";

export default ShieldPlusRegular;
