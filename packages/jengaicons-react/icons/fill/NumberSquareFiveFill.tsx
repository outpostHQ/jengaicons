import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const NumberSquareFiveFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M5.96 4.283a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-22a1 1 0 0 0-1-1h-22Zm8.98 5a1 1 0 0 0-.988.84l-.98 6.025a1 1 0 0 0 1.695.867 2.499 2.499 0 0 1 3.846 3.157 2.5 2.5 0 0 1-3.846.379 1 1 0 1 0-1.414 1.414 4.5 4.5 0 1 0 2.025-7.53l.512-3.152h4.17a1 1 0 0 0 0-2h-5.02Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

NumberSquareFiveFill.displayName = "NumberSquareFiveFill";

export default NumberSquareFiveFill;
