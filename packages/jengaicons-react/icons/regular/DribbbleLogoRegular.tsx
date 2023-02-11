import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DribbbleLogoRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.878 25.659a19.99 19.99 0 0 1 17.123-9.66c.674 0 1.34.034 1.999.1M23.504 6.636A19.96 19.96 0 0 1 8 14c-1.265 0-2.527-.118-3.77-.355"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.741 5.21a19.99 19.99 0 0 1 9.874 17.252 20.048 20.048 0 0 1-.591 4.847"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

DribbbleLogoRegular.displayName = "DribbbleLogoRegular";

export default DribbbleLogoRegular;
