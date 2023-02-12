import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MediumLogoRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M10 22.429c3.314 0 6-2.879 6-6.429 0-3.55-2.686-6.429-6-6.429S4 12.45 4 16c0 3.55 2.686 6.429 6 6.429ZM22 22c1.42 0 2.571-2.686 2.571-6s-1.15-6-2.571-6c-1.42 0-2.572 2.686-2.572 6S20.58 22 22 22ZM28 10v12"
        />
      </svg>
    );
  }
);

MediumLogoRegular.displayName = "MediumLogoRegular";

export default MediumLogoRegular;
