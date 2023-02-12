import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const WhatsappLogoRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M5.68 22.122a12 12 0 1 1 4.198 4.199h0L5.73 27.505a1.001 1.001 0 0 1-1.236-1.236l1.184-4.147h0Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19.02 22.998A10.002 10.002 0 0 1 9.002 12.98a3.498 3.498 0 0 1 3.501-3.488.862.862 0 0 1 .749.435l1.462 2.558a1 1 0 0 1-.011 1.011l-1.174 1.957a6.026 6.026 0 0 0 3.018 3.018l1.957-1.174a1.001 1.001 0 0 1 1.01-.01l2.56 1.461a.861.861 0 0 1 .434.748 3.512 3.512 0 0 1-3.488 3.502Z"
        />
      </svg>
    );
  }
);

WhatsappLogoRegular.displayName = "WhatsappLogoRegular";

export default WhatsappLogoRegular;
