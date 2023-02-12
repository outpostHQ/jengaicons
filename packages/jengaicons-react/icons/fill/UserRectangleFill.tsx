import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const UserRectangleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M3.96 6.783a1 1 0 0 1 1-1h24a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1h-24a1 1 0 0 1-1-1v-20Zm2 1v18h4.689a6.39 6.39 0 0 1 12.622 0h4.689v-18h-22Zm11 12.61a4.784 4.784 0 1 0 0-9.568 4.784 4.784 0 0 0 0 9.569Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

UserRectangleFill.displayName = "UserRectangleFill";

export default UserRectangleFill;
