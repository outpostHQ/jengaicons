import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const UserMinusFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M12.173 18.578a5.401 5.401 0 1 0 0-10.803 5.401 5.401 0 0 0 0 10.803Zm10.043.686a1 1 0 0 1 1-1h5.744a1 1 0 0 1 0 2h-5.744a1 1 0 0 1-1-1Zm-17.188 5.53a7.215 7.215 0 0 1 14.29 0c.075.547-.38.997-.932.997H5.96c-.552 0-1.007-.45-.932-.997Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

UserMinusFill.displayName = "UserMinusFill";

export default UserMinusFill;
