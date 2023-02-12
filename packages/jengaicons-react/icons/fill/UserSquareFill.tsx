import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const UserSquareFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M3.96 4.783a1 1 0 0 1 1-1h24a1 1 0 0 1 1 1v24a1 1 0 0 1-1 1h-24a1 1 0 0 1-1-1v-24Zm2 1v22h3.239a7.826 7.826 0 0 1 7.74-6.824 5.859 5.859 0 1 1 .041 0 7.826 7.826 0 0 1 7.741 6.824h3.239v-22h-22Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

UserSquareFill.displayName = "UserSquareFill";

export default UserSquareFill;
