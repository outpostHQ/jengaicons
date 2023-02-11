import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const GooglePhotosLogoRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.461 16.462V4a6.923 6.923 0 0 1 4.154 12.462"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.462 15.538H4a6.923 6.923 0 0 1 12.462-4.153M15.539 15.539V28a6.923 6.923 0 0 1-4.154-12.461M15.539 16.462H28a6.923 6.923 0 0 1-12.461 4.153"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

GooglePhotosLogoRegular.displayName = "GooglePhotosLogoRegular";

export default GooglePhotosLogoRegular;
