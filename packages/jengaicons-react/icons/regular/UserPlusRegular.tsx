import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const UserPlusRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M22.355 18.382H28M25.177 15.56v5.644M11.534 18.375a5.642 5.642 0 1 0 0-11.284 5.642 5.642 0 0 0 0 11.284Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19.069 25.909a7.534 7.534 0 1 0-15.069 0"
        />
      </svg>
    );
  }
);

UserPlusRegular.displayName = "UserPlusRegular";

export default UserPlusRegular;
