import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DotsSixVerticalFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M11.56 22.744a2.77 2.77 0 1 1 0 5.539 2.77 2.77 0 0 1 0-5.539Zm0-9.23a2.77 2.77 0 1 1 0 5.538 2.77 2.77 0 0 1 0-5.539Zm2.769-6.462a2.77 2.77 0 1 0-5.538 0 2.77 2.77 0 0 0 5.538 0Zm8.03 15.692a2.77 2.77 0 1 1 0 5.539 2.77 2.77 0 0 1 0-5.539Zm0-9.23a2.77 2.77 0 1 1 0 5.538 2.77 2.77 0 0 1 0-5.539Zm2.77-6.462a2.77 2.77 0 1 0-5.539 0 2.77 2.77 0 0 0 5.539 0Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

DotsSixVerticalFill.displayName = "DotsSixVerticalFill";

export default DotsSixVerticalFill;
