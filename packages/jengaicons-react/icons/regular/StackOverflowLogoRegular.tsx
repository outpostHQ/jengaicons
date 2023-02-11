import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const StackOverflowLogoRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M10.788 22.788h10.424M11.7 15.909l10.06 2.697M14.345 9.498l9.03 5.212M18.58 4l7.362 7.362M5.577 20.704V28h20.846v-7.296"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

StackOverflowLogoRegular.displayName = "StackOverflowLogoRegular";

export default StackOverflowLogoRegular;
