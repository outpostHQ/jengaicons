import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CurrencyCnyRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M8.727 8.273h14.546M6.909 14.636H25.09M18.727 14.636V21a2.727 2.727 0 0 0 2.728 2.727H26V21M13.273 14.636v1.818A7.273 7.273 0 0 1 6 23.727"
        />
      </svg>
    );
  }
);

CurrencyCnyRegular.displayName = "CurrencyCnyRegular";

export default CurrencyCnyRegular;
