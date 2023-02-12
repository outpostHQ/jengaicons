import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const GenderIntersexFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M19.706 3.783a1 1 0 1 0 0 2h3.456l-3.421 3.42-.008.009a.716.716 0 0 0-.01.01 6.889 6.889 0 1 0-5.368 12.142 1.002 1.002 0 0 0-.003.071v3.133H11.68a1 1 0 1 0 0 2h2.673v2.215a1 1 0 0 0 2 0v-2.215h2.674a1 1 0 0 0 0-2h-2.674v-3.133c0-.024 0-.048-.002-.072a6.89 6.89 0 0 0 4.716-10.666c.03-.024.06-.05.089-.079l3.301-3.301v3.216a1 1 0 0 0 2 0v-5.75a1 1 0 0 0-1-1h-5.75Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

GenderIntersexFill.displayName = "GenderIntersexFill";

export default GenderIntersexFill;
