import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const UserSwitchRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M25.269 18.817V16.5a9.27 9.27 0 0 0-17.06-5.03M6.731 14.183V16.5a9.269 9.269 0 0 0 17.06 5.03"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m28 16.086-2.73 2.731-2.732-2.73M9.462 16.914 6.73 14.183 4 16.913M16 19.369a3.695 3.695 0 1 0 0-7.39 3.695 3.695 0 0 0 0 7.39Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.935 24.304a4.935 4.935 0 1 0-9.87 0"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

UserSwitchRegular.displayName = "UserSwitchRegular";

export default UserSwitchRegular;
