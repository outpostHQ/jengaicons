import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ShieldPlusFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.384 14.91V5.283a1 1 0 0 0-1-1H6.536c-.553 0-1 .446-1 .998v9.63c0 6.924 3.904 9.508 10.99 13.15a1 1 0 0 0 .876.018c6.908-3.213 10.982-6.069 10.982-13.169Zm-16.424-.105a1 1 0 0 1 1-1h3v-3a1 1 0 1 1 2 0v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 0 1-1-1Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

ShieldPlusFill.displayName = "ShieldPlusFill";

export default ShieldPlusFill;
