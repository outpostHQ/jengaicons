import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const NotificationRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M24.348 11.304a3.652 3.652 0 1 0 0-7.304 3.652 3.652 0 0 0 0 7.304ZM14.957 6.087H4V28h21.913V17.043"
        />
      </svg>
    );
  }
);

NotificationRegular.displayName = "NotificationRegular";

export default NotificationRegular;
