import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ShuffleSimpleRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m4 4.5 24 24M4 28.5l8.196-8.196M28 4.5l-8.012 8.012M22 4.5h6v6M28 22.5v6h-6"
        />
      </svg>
    );
  }
);

ShuffleSimpleRegular.displayName = "ShuffleSimpleRegular";

export default ShuffleSimpleRegular;
