import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ToggleLeftFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M11.817 9.426a6.857 6.857 0 1 0 0 13.714h10.286a6.857 6.857 0 0 0 0-13.714H11.817Zm3.751 6.857a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

ToggleLeftFill.displayName = "ToggleLeftFill";

export default ToggleLeftFill;
