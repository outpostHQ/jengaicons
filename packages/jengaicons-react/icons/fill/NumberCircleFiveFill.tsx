import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const NumberCircleFiveFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.96 16.283c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12s5.372-12 12-12c6.627 0 12 5.373 12 12Zm-14.02-6.5a1 1 0 0 0-.988.84l-.98 6.025a1 1 0 0 0 1.695.867 2.499 2.499 0 0 1 3.846 3.157 2.5 2.5 0 0 1-3.846.379 1 1 0 1 0-1.414 1.414 4.5 4.5 0 1 0 2.025-7.53l.512-3.152h4.17a1 1 0 0 0 0-2h-5.02Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

NumberCircleFiveFill.displayName = "NumberCircleFiveFill";

export default NumberCircleFiveFill;
