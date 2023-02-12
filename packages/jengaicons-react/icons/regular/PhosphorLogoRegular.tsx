import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PhosphorLogoRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m7.515 4 8 16"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="M7.515 4.12v15.97a.1.1 0 0 0 .1.1H16.4a8.085 8.085 0 1 0 0-16.17H7.615a.1.1 0 0 0-.1.1Z"
        />
        <path
          stroke={color || "#000000"}
          strokeWidth="2"
          d="M7.515 20.19a7.81 7.81 0 0 0 7.81 7.81h.15a.04.04 0 0 0 .04-.04V4.21"
        />
      </svg>
    );
  }
);

PhosphorLogoRegular.displayName = "PhosphorLogoRegular";

export default PhosphorLogoRegular;
