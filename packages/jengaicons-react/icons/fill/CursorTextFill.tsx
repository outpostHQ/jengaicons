import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CursorTextFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M10.452 7.052a1 1 0 0 1 1-1h2.508a3.99 3.99 0 0 1 3 1.354 3.99 3.99 0 0 1 3-1.354h2.509a1 1 0 1 1 0 2H19.96a2 2 0 0 0-2 1.974v5.216h1.83a1 1 0 0 1 0 2h-1.83v5.298a2 2 0 0 0 2 1.974h2.509a1 1 0 1 1 0 2H19.96a3.99 3.99 0 0 1-3-1.354 3.99 3.99 0 0 1-3 1.354h-2.508a1 1 0 1 1 0-2h2.508a2 2 0 0 0 2-1.974v-5.297h-1.729a1 1 0 1 1 0-2h1.73V10.026a2 2 0 0 0-2-1.974h-2.51a1 1 0 0 1-1-1Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

CursorTextFill.displayName = "CursorTextFill";

export default CursorTextFill;
