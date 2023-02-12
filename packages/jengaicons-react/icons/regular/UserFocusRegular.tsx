import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const UserFocusRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 17.905a4.228 4.228 0 1 0 0-8.457 4.228 4.228 0 0 0 0 8.457Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21.647 23.552a5.647 5.647 0 0 0-11.294 0M21.17 4.5H28v6.83M21.17 28.5H28v-6.83M10.83 4.5H4v6.83M10.83 28.5H4v-6.83"
        />
      </svg>
    );
  }
);

UserFocusRegular.displayName = "UserFocusRegular";

export default UserFocusRegular;
