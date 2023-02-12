import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MathOperationsFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M26.758 6.03a1 1 0 0 1 0 1.415l-2.02 2.02 2.02 2.02a1 1 0 1 1-1.414 1.414l-2.02-2.02-2.02 2.02a1 1 0 0 1-1.414-1.414l2.02-2.02-2.02-2.02a1 1 0 1 1 1.414-1.415l2.02 2.02 2.02-2.02a1 1 0 0 1 1.414 0ZM6.96 8.465a1 1 0 0 0 0 2h7.273a1 1 0 1 0 0-2H6.96Zm3.637 9.09a1 1 0 0 1 1 1v2.637h2.636a1 1 0 1 1 0 2h-2.636v2.636a1 1 0 1 1-2 0v-2.636H6.96a1 1 0 1 1 0-2h2.637v-2.636a1 1 0 0 1 1-1Zm8.09 2.826a1 1 0 0 1 1-1h7.273a1 1 0 1 1 0 2h-7.273a1 1 0 0 1-1-1Zm1 2.622a1 1 0 1 0 0 2h7.273a1 1 0 1 0 0-2h-7.273Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

MathOperationsFill.displayName = "MathOperationsFill";

export default MathOperationsFill;
