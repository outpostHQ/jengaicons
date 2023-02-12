import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const InstagramLogoRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M16 21.217a5.217 5.217 0 1 0 0-10.434 5.217 5.217 0 0 0 0 10.434Z"
        />
        <rect
          width="24"
          height="24"
          x="4"
          y="4"
          stroke={color || "#000000"}
          strokeWidth="2"
          rx="5"
        />
        <path
          fill={color || "#000000"}
          d="M22.782 10.783a1.565 1.565 0 1 0 0-3.13 1.565 1.565 0 0 0 0 3.13Z"
        />
      </svg>
    );
  }
);

InstagramLogoRegular.displayName = "InstagramLogoRegular";

export default InstagramLogoRegular;
