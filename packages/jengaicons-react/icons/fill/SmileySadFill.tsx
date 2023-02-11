import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SmileySadFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.96 16.783c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12 0-6.628 5.372-12 12-12 6.627 0 12 5.372 12 12Zm-15-2.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm9 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-9.5 5.437a7.002 7.002 0 0 1 9.564 2.563 1 1 0 1 1-1.732 1 5.003 5.003 0 0 0-8.663 0 1 1 0 0 1-1.732-1 7.002 7.002 0 0 1 2.563-2.563Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

SmileySadFill.displayName = "SmileySadFill";

export default SmileySadFill;
