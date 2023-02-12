import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const AirplaneRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M13.274 6.782v5.255L4 16.703v3.765l9.274-1.798v3.456l-1.967 1.968v3.85l4.665-2.36 4.58 2.36v-3.85l-1.826-1.827V18.67L28 20.468v-3.765l-9.274-4.665V6.781a2.726 2.726 0 0 0-5.452 0Z"
        />
      </svg>
    );
  }
);

AirplaneRegular.displayName = "AirplaneRegular";

export default AirplaneRegular;
