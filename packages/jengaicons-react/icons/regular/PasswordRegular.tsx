import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PasswordRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4 6.924v18.152M12.067 11.966V16M8.235 14.752 12.067 16M9.698 19.265 12.068 16M14.437 19.265 12.067 16M15.9 14.752 12.066 16M24.168 11.966V16M20.336 14.752 24.168 16M21.798 19.265 24.168 16M26.538 19.265 24.168 16M28 14.752 24.168 16"
        />
      </svg>
    );
  }
);

PasswordRegular.displayName = "PasswordRegular";

export default PasswordRegular;
