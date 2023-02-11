import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DotsThreeCircleVerticalFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.96 16.283c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12 0-6.628 5.372-12 12-12 6.627 0 12 5.372 12 12Zm-10.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-1.5-4.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm1.5 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

DotsThreeCircleVerticalFill.displayName = "DotsThreeCircleVerticalFill";

export default DotsThreeCircleVerticalFill;
