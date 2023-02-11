import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TelegramLogoRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m11.149 17.07 10.76 9.47a.957.957 0 0 0 1.566-.506l4.5-19.64a.957.957 0 0 0-1.282-1.106L4.607 13.965a.957.957 0 0 0 .163 1.83l6.379 1.275ZM11.149 17.07 27.437 5.307"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m16.523 21.8-3.74 3.739a.957.957 0 0 1-1.634-.677V17.07"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

TelegramLogoRegular.displayName = "TelegramLogoRegular";

export default TelegramLogoRegular;
