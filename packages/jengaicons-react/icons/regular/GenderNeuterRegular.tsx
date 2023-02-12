import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const GenderNeuterRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 21.78A8.64 8.64 0 1 0 16 4.5a8.64 8.64 0 0 0 0 17.28ZM16 21.78v6.72"
        />
      </svg>
    );
  }
);

GenderNeuterRegular.displayName = "GenderNeuterRegular";

export default GenderNeuterRegular;
