import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SnapchatLogoRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4 22.9s5.862-2.71 5.862-11.912a6.138 6.138 0 1 1 12.276 0C22.138 20.189 28 22.9 28 22.9c-1.015.952-3.171.37-4.4 1.047-1.21.666-1.87 2.804-3.24 3.154-1.325.339-2.93-1.207-4.36-1.207-1.43 0-3.035 1.546-4.36 1.207-1.37-.35-2.03-2.488-3.24-3.154-1.229-.676-3.386-.095-4.4-1.047ZM22.722 15.665l2.924-1.17M9.278 15.665l-2.924-1.17"
        />
      </svg>
    );
  }
);

SnapchatLogoRegular.displayName = "SnapchatLogoRegular";

export default SnapchatLogoRegular;
