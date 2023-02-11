import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PhosphorLogoRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m7.515 4 8 16"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.515 4.12v15.97a.1.1 0 0 0 .1.1H16.4a8.085 8.085 0 1 0 0-16.17H7.615a.1.1 0 0 0-.1.1Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M7.515 20.19a7.81 7.81 0 0 0 7.81 7.81h.15a.04.04 0 0 0 .04-.04V4.21"
          stroke="#1C1B1F"
          strokeWidth="2"
        />
      </svg>
    );
  }
);

PhosphorLogoRegular.displayName = "PhosphorLogoRegular";

export default PhosphorLogoRegular;
