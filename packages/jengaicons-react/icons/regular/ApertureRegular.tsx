import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ApertureRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 28.5c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12ZM16 4.5l4.585 12.837M5.608 10.5l13.41 2.448M5.608 22.5l8.824-10.389M16 28.5l-4.585-12.837M26.392 22.5l-13.41-2.448M26.392 10.5l-8.825 10.389"
        />
      </svg>
    );
  }
);

ApertureRegular.displayName = "ApertureRegular";

export default ApertureRegular;
