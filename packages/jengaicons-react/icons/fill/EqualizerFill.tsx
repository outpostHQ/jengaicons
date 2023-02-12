import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const EqualizerFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M22.743 8.435a1 1 0 0 1 1-1h5.217a1 1 0 1 1 0 2h-5.217a1 1 0 0 1-1-1ZM4.96 11.61a1 1 0 1 0 0 2h5.217a1 1 0 0 0 0-2H4.96Zm0 4.174a1 1 0 1 0 0 2h5.217a1 1 0 0 0 0-2H4.96Zm-1 5.174a1 1 0 0 1 1-1h5.217a1 1 0 0 1 0 2H4.96a1 1 0 0 1-1-1Zm1 3.174a1 1 0 1 0 0 2h5.217a1 1 0 0 0 0-2H4.96Zm8.391-7.348a1 1 0 0 1 1-1h5.217a1 1 0 1 1 0 2h-5.217a1 1 0 0 1-1-1Zm1 3.174a1 1 0 1 0 0 2h5.217a1 1 0 1 0 0-2h-5.217Zm-1 5.174a1 1 0 0 1 1-1h5.217a1 1 0 1 1 0 2h-5.217a1 1 0 0 1-1-1Zm10.392-13.522a1 1 0 1 0 0 2h5.217a1 1 0 1 0 0-2h-5.217Zm0 4.174a1 1 0 1 0 0 2h5.217a1 1 0 0 0 0-2h-5.217Zm-1 5.174a1 1 0 0 1 1-1h5.217a1 1 0 1 1 0 2h-5.217a1 1 0 0 1-1-1Zm1 3.174a1 1 0 1 0 0 2h5.217a1 1 0 0 0 0-2h-5.217Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

EqualizerFill.displayName = "EqualizerFill";

export default EqualizerFill;
