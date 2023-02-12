import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PinterestLogoRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m15 11-4 17M7.693 19.57A10 10 0 1 1 26 14c0 5.523-4 9-8 9s-5.204-2.633-5.204-2.633"
        />
      </svg>
    );
  }
);

PinterestLogoRegular.displayName = "PinterestLogoRegular";

export default PinterestLogoRegular;
