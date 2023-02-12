import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const UserCircleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.96 5.783c-6.075 0-11 4.925-11 11 0 3.724 1.85 7.015 4.681 9.005a6.39 6.39 0 0 1 12.638 0 10.987 10.987 0 0 0 4.681-9.005c0-6.075-4.925-11-11-11Zm-13 11c0-7.18 5.82-13 13-13s13 5.82 13 13-5.82 13-13 13-13-5.82-13-13Zm13 3.568a4.784 4.784 0 1 0 0-9.568 4.784 4.784 0 0 0 0 9.568Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

UserCircleFill.displayName = "UserCircleFill";

export default UserCircleFill;
