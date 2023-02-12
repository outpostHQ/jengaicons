import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const UserCircleMinusFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M5.96 16.783c0-6.075 4.925-11 11-11a1 1 0 0 0 0-2c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13a1 1 0 0 0-2 0c0 3.723-1.85 7.015-4.681 9.005a6.39 6.39 0 0 0-12.638 0 10.987 10.987 0 0 1-4.681-9.005Zm17-10a1 1 0 1 0 0 2h6a1 1 0 0 0 0-2h-6Zm-6 13.568a4.784 4.784 0 1 0 0-9.568 4.784 4.784 0 0 0 0 9.568Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

UserCircleMinusFill.displayName = "UserCircleMinusFill";

export default UserCircleMinusFill;
