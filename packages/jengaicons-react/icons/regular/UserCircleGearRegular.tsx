import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const UserCircleGearRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M25 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM25 5.5V4M23.268 6.5l-1.3-.75M23.268 8.5l-1.3.75M25 9.5V11M26.732 8.5l1.3.75M26.732 6.5l1.3-.75M28 16.5c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16 20.068a4.784 4.784 0 1 0 0-9.568 4.784 4.784 0 0 0 0 9.568Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M22.39 26.458a6.39 6.39 0 1 0-12.78 0"
        />
      </svg>
    );
  }
);

UserCircleGearRegular.displayName = "UserCircleGearRegular";

export default UserCircleGearRegular;
