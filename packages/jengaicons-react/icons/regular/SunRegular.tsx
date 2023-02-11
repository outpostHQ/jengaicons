import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SunRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16 22.929a6.429 6.429 0 1 0 0-12.858 6.429 6.429 0 0 0 0 12.858ZM16 6.643V4.5M9.025 9.525l-1.51-1.51M6.143 16.5H4M9.025 23.475l-1.51 1.51M16 26.357V28.5M22.975 23.475l1.51 1.51M25.857 16.5H28M22.975 9.525l1.51-1.51"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SunRegular.displayName = "SunRegular";

export default SunRegular;
