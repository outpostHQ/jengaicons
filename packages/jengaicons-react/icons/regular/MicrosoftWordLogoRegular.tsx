import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MicrosoftWordLogoRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M20 12h7M20 20h7"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinejoin="round"
          d="M5 9h15v14H5z"
        />
        <path
          d="M9 8.903V4h18v24H9v-4.952"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m8.957 13.102 1.4 5.938 2.045-4.734 2.017 4.734 1.624-5.938"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

MicrosoftWordLogoRegular.displayName = "MicrosoftWordLogoRegular";

export default MicrosoftWordLogoRegular;
