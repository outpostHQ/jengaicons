import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TelegramLogoRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m11.149 17.07 10.76 9.47a.957.957 0 0 0 1.566-.506l4.5-19.64a.957.957 0 0 0-1.282-1.106L4.607 13.965a.957.957 0 0 0 .163 1.83l6.379 1.275ZM11.149 17.07 27.437 5.307"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m16.523 21.8-3.74 3.739a.957.957 0 0 1-1.634-.677V17.07"
        />
      </svg>
    );
  }
);

TelegramLogoRegular.displayName = "TelegramLogoRegular";

export default TelegramLogoRegular;
