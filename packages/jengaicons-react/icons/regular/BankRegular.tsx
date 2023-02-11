import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BankRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M7.857 13.429V22M13 13.429V22M18.143 13.429V22M23.286 13.429V22M5.714 22h20.572M4 25.429h24"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m16 6.571 10.714 6.858H5.286L16 6.57Z"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
});

BankRegular.displayName = "BankRegular";

export default BankRegular;
