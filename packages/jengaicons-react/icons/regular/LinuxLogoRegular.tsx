import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const LinuxLogoRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4 27.5s4-7 4-15a8 8 0 0 1 16 0c0 8 4 15 4 15"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.5 15.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM19.5 15.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
          fill="#1C1B1F"
        />
        <path
          d="m20 18.5-4 2-4-2M10.8 27.5a6.014 6.014 0 0 1 10.4 0"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

LinuxLogoRegular.displayName = "LinuxLogoRegular";

export default LinuxLogoRegular;
